"use client";
import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  TrendingUp, 
  Users, 
  Calendar,
  Plus,
  Video,
  FileText,
  BarChart3,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Zap
} from "lucide-react";

function Dashboard() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Sample data for recent activities
    const recentActivities = [
        { id: 1, type: "interview", title: "Frontend Developer Interview", time: "2 hours ago", status: "completed" },
        { id: 2, type: "scheduled", title: "Senior React Developer", time: "Tomorrow at 10:00 AM", status: "upcoming" },
        { id: 3, type: "interview", title: "Full Stack Engineer", time: "Yesterday", status: "completed" },
        { id: 4, type: "scheduled", title: "UI/UX Designer", time: "In 3 days", status: "upcoming" },
    ];

    return (
        <div className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Header Section */}
            <div className={`mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg shadow-blue-500/20">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                        Dashboard
                    </h1>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg ml-14">
                    Welcome back! Here's what's happening with your interviews today.
                </p>
            </div>

            {/* Stats Cards Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {/* Total Interviews Card */}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-800/50 hover:scale-105 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/30">
                                <Video className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Total Interviews</h3>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">24</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 ml-1">
                            <span className="flex items-center text-green-600 dark:text-green-400 text-sm font-semibold">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                +12%
                            </span>
                            <p className="text-xs text-slate-500 dark:text-slate-400">vs last month</p>
                        </div>
                    </div>
                </div>

                {/* Scheduled Card */}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-800/50 hover:scale-105 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg shadow-purple-500/30">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Scheduled</h3>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">8</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 ml-1">
                            <span className="flex items-center text-purple-600 dark:text-purple-400 text-sm font-semibold">
                                <Calendar className="w-4 h-4 mr-1" />
                                5 remaining
                            </span>
                        </div>
                    </div>
                </div>

                {/* Success Rate Card */}
                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-800/50 hover:scale-105 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg shadow-orange-500/30">
                                <BarChart3 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Success Rate</h3>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">87%</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 ml-1">
                            <span className="flex items-center text-green-600 dark:text-green-400 text-sm font-semibold">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                +8%
                            </span>
                            <p className="text-xs text-slate-500 dark:text-slate-400">vs last month</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions Section */}
            <div className={`mb-8 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-blue-600" />
                    Quick Actions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Create New Interview */}
                    <button className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 text-left">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative">
                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl w-fit mb-4">
                                <Plus className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Create New Interview</h3>
                            <p className="text-blue-100 text-sm mb-4">Set up a new AI-powered interview session</p>
                            <div className="flex items-center text-white font-semibold">
                                Get Started
                                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </div>
                        </div>
                    </button>

                    {/* View Analytics */}
                    <button className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 border border-slate-200/50 dark:border-slate-800/50 text-left">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative">
                            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl w-fit mb-4 shadow-lg shadow-purple-500/30">
                                <BarChart3 className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">View Analytics</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Track performance and insights</p>
                            <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold">
                                View Details
                                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </div>
                        </div>
                    </button>

                    {/* Generate Report */}
                    <button className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 border border-slate-200/50 dark:border-slate-800/50 text-left">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative">
                            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl w-fit mb-4 shadow-lg shadow-emerald-500/30">
                                <FileText className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Generate Report</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Export detailed interview reports</p>
                            <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-semibold">
                                Create Report
                                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Recent Activity Section */}
            <div className={`transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-purple-600" />
                    Recent Activity
                </h2>
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
                    <div className="divide-y divide-slate-200 dark:divide-slate-800">
                        {recentActivities.map((activity, index) => (
                            <div 
                                key={activity.id} 
                                className="group p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl ${
                                            activity.status === 'completed' 
                                                ? 'bg-green-100 dark:bg-green-900/30' 
                                                : 'bg-blue-100 dark:bg-blue-900/30'
                                        }`}>
                                            {activity.status === 'completed' ? (
                                                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                                            ) : (
                                                <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {activity.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2 mt-1">
                                                <Clock className="w-4 h-4" />
                                                {activity.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={`px-4 py-2 rounded-full text-xs font-semibold ${
                                            activity.status === 'completed'
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                        }`}>
                                            {activity.status === 'completed' ? 'Completed' : 'Upcoming'}
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;