import React from 'react';
// import ExploreBanner from '../components/ui/Banner/ExploreBanner';
// import FreeTrialBanner from '../components/ui/Banner/FreeTrialBanner';
// import JoinOurTeamBanner from '../components/ui/Banner/JoinOurTeam';
// import NextStepBanner from '../components/ui/Banner/NextStepBanner';
// import PricingBanner from '../components/ui/Banner/PricingBanner';

export function getAllPostIds(posts) {
    return posts.map(post => {
        return {
            params: {
                id: `${post.id}`
            }
        }
    })
}

// export const getBanner = (banner) => {
//     console.log(banner)
//     switch(banner) {
//         case "Explore": return <ExploreBanner/>;
//         case "FreeTrial": return <FreeTrialBanner/>;
//         case "JoinOurTeam": return <JoinOurTeamBanner/>;
//         case "NextStep": return <NextStepBanner/>;
//         case "Pricing": return <PricingBanner/>;
//         default: return <ExploreBanner/>
//     }
// }

export const generateBlogPostDate = (time) => {
    const date = new Date(time)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${day < 10 ? `0${day}` : day} ${month} ${year} - ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
}

export const generateEventDate = (date) => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const start = new Date(date.start)
    const end = new Date(date.end)

    let startDay = start.getDate();
    let startMonth = months[start.getMonth()];
    let startYear = start.getFullYear();

    let endDay = end.getDate();
    let endMonth = months[end.getMonth()];
    let endYear = end.getFullYear();

    return `${startDay < 10 ? `0${startDay}` : startDay} ${startMonth} ${startYear} - ${endDay < 10 ? `0${endDay}` : endDay} ${endMonth} ${endYear}`
}


export const generateShowDate = (time) => {
    const date = new Date(time)
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

    let day = date.getDate();
    let month = date.getMonth()+1;
    let weekday = days[date.getDay()]
    let year = date.getFullYear();

    return {
        weekday,
        day: day < 10 ? `0${day}` : day,
        month: month < 10 ? `0${month}` : month,
        year
    }
}

export const checkShowDateValidity = (endDate) => {
    let date = new Date();
    return !(endDate < date)
}