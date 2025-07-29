"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";

import React from "react";

export default function Timeline() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "rgb(255, 255, 255, 0.06)",
            color: "#fff",
            backdropFilter: "blur(20px)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">Freelancer</h3>
          <h4 className="vertical-timeline-element-subtitle">World wide</h4>
          <p>
            Frontend development, User Experience, Coaching, Content creation.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "rgb(255, 255, 255, 0.06)",
            color: "#fff",
            backdropFilter: "blur(20px)",
            fontSize: "14px",
          }}
          date="Apr 2024 - June 2025"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Loggworks, United Kingdom
          </h4>
          <p className="">
            At Loggworks, I developed a comprehensive welcome page consisting of
            over 15 user-friendly pages for a platform that connects individuals
            with home service providers like cleaners, plumbers, and mechanics.
            I focused on creating a seamless and responsive user experience,
            enhancing navigation and engagement.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "rgb(255, 255, 255, 0.06)",
            color: "#fff",
            backdropFilter: "blur(80px)",
          }}
          date="2022 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          iconClassName={"String"}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">Course Instructor</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bestsoft Technologies, Nigeria
          </h4>
          <p>
            At Bestsoft Technology, I guided IT industrial training students as
            an HTML and CSS instructor. I'm proud to have facilitated clear
            comprehension of web technology, resulting in excellent grades for
            these students.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "rgb(255, 255, 255, 0.06)",
            color: "#fff",
            backdropFilter: "blur(80px)",
          }}
          date="2021 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          iconClassName={"String"}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Development Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            NBMC Technologies, Nigeria
          </h4>
          <p>
            During my impactful industrial training at NBMC, I immersed myself
            in the world of web technologies, mastering the art of crafting
            innovative solutions. Collaborating on dynamic group projects not
            only refined my technical skills but also enriched my communication
            and teamwork abilities.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
