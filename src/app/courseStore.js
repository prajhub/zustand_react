import create from 'zustand';


import {devtools, persist} from 'zustand/middleware';

const courseStore = (set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({
            courses: [course, ...state.courses],
        }))
    }
})