"use client";

import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import { Users, GraduationCap, BookOpen } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Students Worldwide",
  },
  {
    icon: GraduationCap,
    value: "100+",
    label: "Certified Teachers",
  },
  {
    icon: BookOpen,
    value: "15+",
    label: "Specialized Courses",
  },
];

const HeroStats = () => {
  return (
    <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 z-10 relative">
      {stats.map(({ icon: Icon, value, label }, index) => (
        <Paper
          key={index}
          elevation={3}
          className="p-6 rounded-lg border-t-4 border-emerald-600 bg-white"
        >
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Box className="bg-emerald-100 p-3 rounded-full">
              <Icon className="h-6 w-6 text-emerald-600" />
            </Box>
            <Box>
              <Typography
                variant="h4"
                component="h3"
                className="text-emerald-800 font-bold"
              >
                {value}
              </Typography>
              <Typography className="text-gray-600">{label}</Typography>
            </Box>
          </Stack>
        </Paper>
      ))}
    </Box>
  );
};

export default HeroStats;
