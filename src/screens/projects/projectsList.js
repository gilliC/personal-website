import { faGooglePlay, faGithub } from "@fortawesome/free-brands-svg-icons";
import goalTrackerImg1 from "assets/projects/goal_tracker_1.jpg";
import goalTrackerImg2 from "assets/projects/goal_tracker_2.gif";
import goalTrackerImg3 from "assets/projects/goal_tracker_3.gif";
import goalTrackerImg4 from "assets/projects/goal_tracker_4.gif";
import goalTrackerImg5 from "assets/projects/goal_tracker_5.gif";

export const projectesList = [
  {
    title: "Goals Tracker",
    description:
      "A simple react native app to track the amount of steps you take to achieve your goals",
    technologiesSkills: ["React Native", "Redux"],
    links: [
      { icon: faGooglePlay, href: "https://play.google.com/store/apps/details?id=com.goalstracking" },
      { icon: faGithub, href: "https://github.com/gilliC/Achieving-Goals-Assistant" }],
    images: [goalTrackerImg1, goalTrackerImg2, goalTrackerImg3, goalTrackerImg4, goalTrackerImg5]

  },
];
