"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, CheckCircle, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function DashboardStats() {
    // Mock Data for the chart
    const data = [
        { name: 'Mon', interviews: 2 },
        { name: 'Tue', interviews: 5 },
        { name: 'Wed', interviews: 3 },
        { name: 'Thu', interviews: 7 },
        { name: 'Fri', interviews: 4 },
        { name: 'Sat', interviews: 6 },
        { name: 'Sun', interviews: 2 },
    ];

    const stats = [
        {
            title: "Total Interviews",
            value: "142",
            change: "+12% from last month",
            icon: Users,
            color: "text-blue-500"
        },
        {
            title: "Scheduled",
            value: "8",
            change: "For the next 7 days",
            icon: Calendar,
            color: "text-purple-500"
        },
        {
            title: "Completed",
            value: "124",
            change: "+8.2% completion rate",
            icon: CheckCircle,
            color: "text-green-500"
        },
        {
            title: "Avg. Duration",
            value: "42m",
            change: "-2m from last month",
            icon: Clock,
            color: "text-orange-500"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                {stat.change}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Chart Section */}
            <Card className="col-span-4 shadow-sm">
                <CardHeader>
                    <CardTitle>Interview Activity</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis 
                                    dataKey="name" 
                                    stroke="#888888" 
                                    fontSize={12} 
                                    tickLine={false} 
                                    axisLine={false}
                                />
                                <YAxis 
                                    stroke="#888888" 
                                    fontSize={12} 
                                    tickLine={false} 
                                    axisLine={false}
                                    tickFormatter={(value) => `${value}`}
                                />
                                <Tooltip 
                                    contentStyle={{ background: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                                    cursor={{ stroke: '#6366f1', strokeWidth: 1 }}
                                />
                                <Line 
                                    type="monotone" 
                                    dataKey="interviews" 
                                    stroke="#6366f1" 
                                    strokeWidth={3} 
                                    dot={{ r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }}
                                    activeDot={{ r: 6 }} 
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default DashboardStats;
