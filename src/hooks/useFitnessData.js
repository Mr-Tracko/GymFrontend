import { useState, useEffect, useCallback } from 'react';
import apiClient from '../api/apiClient';

const useFitnessData = (isLoggedIn, currentUserId) => {
    const [logs, setLogs] = useState({ diet: [], workout: [] });
    const [profile, setProfile] = useState(null);
    const [rewards, setRewards] = useState({ points: 0, status: '', achievements: [] });
    const [analytics, setAnalytics] = useState(null);
    const [isLoadingData, setIsLoadingData] = useState(false);
    // REMOVED: dailyReport and selectedCalendarDate state

    const fetchProfile = useCallback(async () => {
        try {
            const response = await apiClient.get('/user/profile/me');
            if (response.data && response.data.id) {
                setProfile(response.data);
            } else {
                setProfile(null);
            }
        } catch (error) {
            console.error('Failed to fetch profile:', error);
            setProfile(null);
        }
    }, []);

    const fetchLogs = useCallback(async () => {
        try {
            const dietResponse = await apiClient.get('/diet/logs/me');
            const workoutResponse = await apiClient.get('/workout/history/me');
            
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
            setLogs({
                diet: dietResponse.data?.history?.filter(log => new Date(log.date) >= sevenDaysAgo) || [],
                workout: workoutResponse.data?.history?.filter(log => new Date(log.date) >= sevenDaysAgo) || [],
            });
        } catch (error) {
            console.error('Failed to fetch logs:', error);
            setLogs({ diet: [], workout: [] });
        }
    }, []);
    
    const fetchRewards = useCallback(async () => {
        try {
            const response = await apiClient.get('/reward/status/me');
            setRewards({
                points: response.data?.points || 0,
                status: response.data?.rewards || '',
                achievements: response.data?.achievements || []
            });
        } catch (error) {
            console.error('Failed to fetch rewards:', error);
            setRewards({ points: 0, status: '', achievements: [] });
        }
    }, []);

    const fetchAnalytics = useCallback(async () => {
        try {
            const response = await apiClient.get('/progress/weekly-report/me');
            // Using response.data directly as weekly-report returns the full object
            setAnalytics(response.data || null);
        } catch (error) {
            console.error('Failed to fetch analytics:', error);
            setAnalytics(null);
        }
    }, []);

    // REMOVED: fetchCalendarData and fetchDailyReport functions

    const fetchInitialData = useCallback(async () => {
        if (!isLoggedIn) return;
        setIsLoadingData(true);
        try {
            // REMOVED: fetchCalendarData from Promise.all
            await Promise.all([
                fetchProfile(),
                fetchLogs(),
                fetchRewards(),
                fetchAnalytics()
            ]);
        } catch (error) {
            console.error('Failed to fetch initial data:', error);
        } finally {
            setIsLoadingData(false);
        }
    }, [isLoggedIn, fetchProfile, fetchLogs, fetchRewards, fetchAnalytics]);
    
    useEffect(() => {
        if (isLoggedIn && currentUserId) {
            fetchInitialData();
        }
    }, [isLoggedIn, currentUserId, fetchInitialData]);
    
    // REMOVED: dailyReport, selectedCalendarDate, and fetchDailyReport from return
    return {
        logs,
        profile,
        rewards,
        analytics,
        isLoadingData,
        fetchInitialData,
        fetchLogs
    };
};

export default useFitnessData;