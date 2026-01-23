"use client";

import Link from "next/link";
import {
  Award,
  Building,
  ClipboardCheck,
  FileText,
  HeartHandshake,
  MapPin,
  Users,
} from "lucide-react";

import MusicPlayer from "@/components/music-player";
import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const { language } = useLanguage();
  const content = {
    en: {
      hero: {
        badge: "Welcome",
        title: "Habiba International School",
        subtitle: "A modern campus focused on care, clarity, and future-ready learning.",
        description:
          "Bangla-first campus updates, admissions, and information for families.",
        ctas: {
          primary: "Student",
          secondary: "Contact",
        },
        stats: [
          { label: "Founded", value: "1998" },
          { label: "Campuses", value: "2" },
          { label: "Graduate Success", value: "96%" },
          { label: "Parent Satisfaction", value: "4.8/5" },
        ],
      },
      map: {
        title: "Campus Location",
        subtitle: "View our main campus on Google Maps.",
        linkLabel: "Open in Google Maps",
      },
      about: {
        heading: "About the school",
        subtitle: "Trusted by families for strong academics and warm care.",
        summary:
          "Habiba International School blends national standards with global skills, creating confident learners ready for a changing world.",
        pillarsHeading: "What defines our school",
        pillarsSubtitle: "Core pillars that guide teaching and student life.",
        highlights: [
          {
            icon: Award,
            title: "Accredited Curriculum",
            detail: "National and global benchmarks for every grade.",
          },
          {
            icon: Users,
            title: "Student-Centered Culture",
            detail: "Mentoring, small classes, and leadership development.",
          },
          {
            icon: Building,
            title: "Modern Facilities",
            detail: "STEM labs, arts studios, and digital classrooms.",
          },
          {
            icon: HeartHandshake,
            title: "Community Impact",
            detail: "Service learning with local partners and NGOs.",
          },
        ],
        leadership: {
          title: "Leadership Note",
          quote:
            "We nurture confident learners who communicate, innovate, and lead with empathy.",
          name: "- Dr. Samira Hasan, Principal",
        },
        campus: {
          heading: "Campus information",
          subtitle: "Operating hours, transport coverage, and health services.",
          items: [
            {
              title: "Campus Hours",
              detail: "Sunday - Thursday: 8:00 AM - 4:00 PM",
            },
            {
              title: "Transport",
              detail: "Routes across Dhanmondi, Mirpur, Uttara, and Badda.",
            },
            {
              title: "Health Services",
              detail: "On-site nurse, counseling room, wellness checkups.",
            },
          ],
        },
      },
      admissions: {
        heading: "Admissions",
        subtitle: "Simple steps for every family.",
        stepLabel: "Step",
        steps: [
          {
            title: "Submit Application",
            detail: "Fill the form with student and guardian information.",
          },
          {
            title: "Assessment",
            detail: "Short skill review and interview for placement.",
          },
          {
            title: "Confirmation",
            detail: "Offer letter and enrollment confirmation.",
          },
        ],
        programs: {
          heading: "Programs & eligibility",
          subtitle: "Key details by academic stage.",
          items: [
            {
              title: "Primary (Grades 1-5)",
              details: [
                "Age requirement: 6+ years",
                "Diagnostic assessment and parent meeting",
                "Daily co-curricular activity",
              ],
            },
            {
              title: "Middle (Grades 6-8)",
              details: [
                "Minimum GPA from previous term",
                "English and Math placement check",
                "Optional language enrichment",
              ],
            },
            {
              title: "Senior (Grades 9-12)",
              details: [
                "Subject selection counseling",
                "Mandatory admission test and interview",
                "Dedicated career guidance",
              ],
            },
          ],
        },
        list: {
          heading: "Admissions list",
          subtitle: "Latest admissions updates for families.",
          items: [
            { name: "Ariana Saha", grade: "Grade 5", status: "Selected" },
            { name: "Nabil Islam", grade: "Grade 8", status: "Interview" },
            { name: "Farhan Noor", grade: "Grade 10", status: "Waiting" },
          ],
        },
        downloads: {
          heading: "Downloads",
          subtitle: "Prospectus, calendar, and policy documents.",
          downloadLabel: "Download",
          items: [
            { title: "Admissions Prospectus", tag: "PDF", updated: "Jan 2026" },
            { title: "Academic Calendar", tag: "PDF", updated: "Dec 2025" },
            { title: "School Policy", tag: "PDF", updated: "Nov 2025" },
          ],
        },
        faq: {
          heading: "Admissions FAQ",
          subtitle: "Answers to common parent questions.",
          items: [
            {
              question: "What documents are required?",
              answer:
                "Previous report cards, birth certificate, passport photos, and guardian NID.",
            },
            {
              question: "Is there an admission test?",
              answer: "Yes, English and Math assessment with a short interview.",
            },
            {
              question: "Can I pay in installments?",
              answer: "Installments are available for Grades 6-12.",
            },
          ],
        },
      },
    },
    bn: {
      hero: {
        badge: "à¦¸à§à¦¬à¦¾à¦—à¦¤à¦®",
        title: "à¦¹à¦¾à¦¬à¦¿à¦¬à¦¾ à¦‡à¦¨à§à¦Ÿà¦¾à¦°à¦¨à§à¦¯à¦¾à¦¶à¦¨à¦¾à¦² à¦¸à§à¦•à§à¦²",
        subtitle: "à¦¯à¦¤à§à¦¨, à¦¸à§à¦ªà¦·à§à¦Ÿà¦¤à¦¾ à¦“ à¦­à¦¬à¦¿à¦·à§à¦¯à§Ž-à¦ªà§à¦°à¦¸à§à¦¤à§à¦¤ à¦¶à¦¿à¦•à§à¦·à¦¾à¦° à¦†à¦§à§à¦¨à¦¿à¦• à¦•à§à¦¯à¦¾à¦®à§à¦ªà¦¾à¦¸à¥¤",
        description:
          "à¦‡à¦‚à¦°à§‡à¦œà¦¿ à¦“ à¦¬à¦¾à¦‚à¦²à¦¾à§Ÿ à¦•à§à¦²à¦¾à§Ÿà§‡à¦¨à§à¦Ÿ à¦‰à¦ªà¦¸à§à¦¥à¦¾à¦ªà¦¨à¦¾à¦° à¦œà¦¨à§à¦¯ à¦¸à¦®à§à¦ªà§‚à¦°à§à¦£ à¦¸à§à¦Ÿà§à¦¯à¦¾à¦Ÿà¦¿à¦• à¦¡à§‡à¦®à§‹ à¦•à¦¨à§à¦Ÿà§‡à¦¨à§à¦Ÿà¥¤",
        ctas: {
          primary: "à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€",
          secondary: "à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦—",
        },
        stats: [
          { label: "à¦ªà§à¦°à¦¤à¦¿à¦·à§à¦ à¦¾", value: "1998" },
          { label: "à¦•à§à¦¯à¦¾à¦®à§à¦ªà¦¾à¦¸", value: "2" },
          { label: "à¦¸à¦¾à¦«à¦²à§à¦¯", value: "96%" },
          { label: "à¦¸à¦¨à§à¦¤à§à¦·à§à¦Ÿà¦¿", value: "4.8/5" },
        ],
      },
      map: {
        title: "à¦•à§à¦¯à¦¾à¦®à§à¦ªà¦¾à¦¸ à¦²à§‹à¦•à§‡à¦¶à¦¨",
        subtitle: "à¦—à§à¦—à¦² à¦®à§à¦¯à¦¾à¦ªà§‡ à¦•à§à¦¯à¦¾à¦®à§à¦ªà¦¾à¦¸ à¦¦à§‡à¦–à§à¦¨à¥¤",
        linkLabel: "à¦—à§à¦—à¦² à¦®à§à¦¯à¦¾à¦ªà§‡ à¦–à§à¦²à§à¦¨",
      },
      about: {
        heading: "à¦¸à§à¦•à§à¦² à¦ªà¦°à¦¿à¦šà¦¿à¦¤à¦¿",
        subtitle: "à¦¦à§ƒà§ à¦à¦•à¦¾à¦¡à§‡à¦®à¦¿à¦• à¦®à¦¾à¦¨ à¦“ à¦†à¦¨à§à¦¤à¦°à¦¿à¦• à¦¯à¦¤à§à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦†à¦¸à§à¦¥à¦¾à¦° à¦ªà§à¦°à¦¤à¦¿à¦·à§à¦ à¦¾à¦¨à¥¤",
        summary:
          "à¦¹à¦¾à¦¬à¦¿à¦¬à¦¾ à¦‡à¦¨à§à¦Ÿà¦¾à¦°à¦¨à§à¦¯à¦¾à¦¶à¦¨à¦¾à¦² à¦¸à§à¦•à§à¦²à§‡ à¦œà¦¾à¦¤à§€à§Ÿ à¦®à¦¾à¦¨à¦¦à¦£à§à¦¡à§‡à¦° à¦¸à¦¾à¦¥à§‡ à¦—à§à¦²à§‹à¦¬à¦¾à¦² à¦¸à§à¦•à¦¿à¦² à¦¯à§à¦•à§à¦¤ à¦•à¦°à§‡ à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€à¦¦à§‡à¦° à¦†à¦¤à§à¦®à¦¬à¦¿à¦¶à§à¦¬à¦¾à¦¸à§€ à¦•à¦°à§‡ à¦—à§œà§‡ à¦¤à§‹à¦²à¦¾ à¦¹à§Ÿà¥¤",
        pillarsHeading: "à¦†à¦®à¦¾à¦¦à§‡à¦° à¦¶à¦•à§à¦¤à¦¿à¦° à¦­à¦¿à¦¤à§à¦¤à¦¿",
        pillarsSubtitle: "à¦¶à¦¿à¦•à§à¦·à¦¾ à¦“ à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€à¦° à¦œà§€à¦¬à¦¨ à¦ªà¦°à¦¿à¦šà¦¾à¦²à¦¨à¦¾à¦° à¦®à§‚à¦² à¦¨à§€à¦¤à¦¿à¥¤",
        highlights: [
          {
            icon: Award,
            title: "à¦¸à§à¦¬à§€à¦•à§ƒà¦¤ à¦ªà¦¾à¦ à§à¦¯à¦•à§à¦°à¦®",
            detail: "à¦ªà§à¦°à¦¤à¦¿à¦Ÿà¦¿ à¦—à§à¦°à§‡à¦¡à§‡à¦° à¦œà¦¨à§à¦¯ à¦®à¦¾à¦¨à¦¸à¦®à§à¦®à¦¤ à¦•à§‹à¦° à¦•à¦¾à¦°à¦¿à¦•à§à¦²à¦¾à¦®à¥¤",
          },
          {
            icon: Users,
            title: "à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€-à¦•à§‡à¦¨à§à¦¦à§à¦°à¦¿à¦• à¦ªà¦°à¦¿à¦¬à§‡à¦¶",
            detail: "à¦®à§‡à¦¨à§à¦Ÿà¦°à¦¿à¦‚, à¦›à§‹à¦Ÿ à¦•à§à¦²à¦¾à¦¸, à¦¨à§‡à¦¤à§ƒà¦¤à§à¦¬ à¦‰à¦¨à§à¦¨à§Ÿà¦¨à¥¤",
          },
          {
            icon: Building,
            title: "à¦†à¦§à§à¦¨à¦¿à¦• à¦¸à§à¦¬à¦¿à¦§à¦¾",
            detail: "STEM à¦²à§à¦¯à¦¾à¦¬, à¦†à¦°à§à¦Ÿ à¦¸à§à¦Ÿà§à¦¡à¦¿à¦“, à¦¡à¦¿à¦œà¦¿à¦Ÿà¦¾à¦² à¦•à§à¦²à¦¾à¦¸à¦°à§à¦®à¥¤",
          },
          {
            icon: HeartHandshake,
            title: "à¦•à¦®à¦¿à¦‰à¦¨à¦¿à¦Ÿà¦¿ à¦ªà§à¦°à¦­à¦¾à¦¬",
            detail: "à¦¸à§à¦¥à¦¾à¦¨à§€à§Ÿ à¦…à¦‚à¦¶à§€à¦¦à¦¾à¦°à¦¦à§‡à¦° à¦¸à¦¾à¦¥à§‡ à¦¸à§‡à¦¬à¦¾à¦®à§‚à¦²à¦• à¦ªà§à¦°à¦•à¦²à§à¦ªà¥¤",
          },
        ],
        leadership: {
          title: "à¦ªà§à¦°à¦§à¦¾à¦¨ à¦¶à¦¿à¦•à§à¦·à¦•à§‡à¦° à¦¬à¦¾à¦°à§à¦¤à¦¾",
          quote:
            "à¦†à¦®à¦°à¦¾ à¦†à¦¤à§à¦®à¦¬à¦¿à¦¶à§à¦¬à¦¾à¦¸à§€ à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€ à¦—à§œà§‡ à¦¤à§à¦²à¦¿ à¦¯à¦¾à¦°à¦¾ à¦¦à¦¾à§Ÿà¦¿à¦¤à§à¦¬à¦¶à§€à¦² à¦¨à§‡à¦¤à§ƒà¦¤à§à¦¬ à¦¦à¦¿à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¥¤",
          name: "- à¦¡. à¦¸à¦¾à¦®à¦¿à¦°à¦¾ à¦¹à¦¾à¦¸à¦¾à¦¨, à¦ªà§à¦°à¦¿à¦¨à§à¦¸à¦¿à¦ªà¦¾à¦²",
        },
        campus: {
          heading: "à¦•à§à¦¯à¦¾à¦®à§à¦ªà¦¾à¦¸ à¦¤à¦¥à§à¦¯",
          subtitle: "à¦¸à¦®à§Ÿà¦¸à§‚à¦šà¦¿, à¦ªà¦°à¦¿à¦¬à¦¹à¦¨ à¦à¦¬à¦‚ à¦¸à§à¦¬à¦¾à¦¸à§à¦¥à§à¦¯à¦¸à§‡à¦¬à¦¾ à¦¤à¦¥à§à¦¯à¥¤",
          items: [
            {
              title: "à¦•à§à¦¯à¦¾à¦®à§à¦ªà¦¾à¦¸ à¦¸à¦®à§Ÿ",
              detail: "à¦°à¦¬à¦¿à¦¬à¦¾à¦° - à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°: à¦¸à¦•à¦¾à¦² à§®:à§¦à§¦ - à¦¬à¦¿à¦•à¦¾à¦² à§ª:à§¦à§¦",
            },
            {
              title: "à¦ªà¦°à¦¿à¦¬à¦¹à¦¨",
              detail: "à¦§à¦¾à¦¨à¦®à¦¨à§à¦¡à¦¿, à¦®à¦¿à¦°à¦ªà§à¦°, à¦‰à¦¤à§à¦¤à¦°à¦¾, à¦¬à¦¾à¦¡à§à¦¡à¦¾ à¦•à¦­à¦¾à¦°à§‡à¦œà¥¤",
            },
            {
              title: "à¦¸à§à¦¬à¦¾à¦¸à§à¦¥à§à¦¯à¦¸à§‡à¦¬à¦¾",
              detail: "à¦…à¦¨à¦¸à¦¾à¦‡à¦Ÿ à¦¨à¦¾à¦°à§à¦¸, à¦•à¦¾à¦‰à¦¨à§à¦¸à§‡à¦²à¦¿à¦‚ à¦°à§à¦®, à¦¨à¦¿à§Ÿà¦®à¦¿à¦¤ à¦šà§‡à¦•à¦†à¦ªà¥¤",
            },
          ],
        },
      },
      admissions: {
        heading: "à¦­à¦°à§à¦¤à¦¿",
        subtitle: "à¦ªà§à¦°à¦¤à§à¦¯à§‡à¦• à¦ªà¦°à¦¿à¦¬à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦¸à¦¹à¦œ à¦§à¦¾à¦ªà¥¤",
        stepLabel: "à¦§à¦¾à¦ª",
        steps: [
          {
            title: "à¦†à¦¬à§‡à¦¦à¦¨ à¦œà¦®à¦¾",
            detail: "à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€ à¦“ à¦…à¦­à¦¿à¦­à¦¾à¦¬à¦•à§‡à¦° à¦¤à¦¥à§à¦¯ à¦¦à¦¿à§Ÿà§‡ à¦«à¦°à¦® à¦ªà§‚à¦°à¦£à¥¤",
          },
          {
            title: "à¦®à§‚à¦²à§à¦¯à¦¾à§Ÿà¦¨",
            detail: "à¦¸à¦‚à¦•à§à¦·à¦¿à¦ªà§à¦¤ à¦¸à§à¦•à¦¿à¦² à¦°à¦¿à¦­à¦¿à¦‰ à¦“ à¦‡à¦¨à§à¦Ÿà¦¾à¦°à¦­à¦¿à¦‰à¥¤",
          },
          {
            title: "à¦¨à¦¿à¦¶à§à¦šà¦¿à¦¤à¦•à¦°à¦£",
            detail: "à¦…à¦«à¦¾à¦° à¦²à§‡à¦Ÿà¦¾à¦° à¦“ à¦­à¦°à§à¦¤à¦¿ à¦¨à¦¿à¦¶à§à¦šà¦¿à¦¤à¦•à¦°à¦£à¥¤",
          },
        ],
        programs: {
          heading: "à¦ªà§à¦°à§‹à¦—à§à¦°à¦¾à¦® à¦“ à¦¯à§‹à¦—à§à¦¯à¦¤à¦¾",
          subtitle: "à¦ªà§à¦°à¦¤à¦¿à¦Ÿà¦¿ à¦¸à§à¦¤à¦°à§‡à¦° à¦¸à¦‚à¦•à§à¦·à¦¿à¦ªà§à¦¤ à¦¤à¦¥à§à¦¯à¥¤",
          items: [
            {
              title: "à¦ªà§à¦°à¦¾à¦‡à¦®à¦¾à¦°à¦¿ (à¦—à§à¦°à§‡à¦¡ à§§-à§«)",
              details: [
                "à¦¬à§Ÿà¦¸ à§¬+ à¦¬à¦›à¦°",
                "à¦¡à¦¾à§Ÿà¦¾à¦—à¦¨à¦¸à§à¦Ÿà¦¿à¦• à¦®à§‚à¦²à§à¦¯à¦¾à§Ÿà¦¨ à¦“ à¦…à¦­à¦¿à¦­à¦¾à¦¬à¦• à¦®à¦¿à¦Ÿà¦¿à¦‚",
                "à¦¦à§ˆà¦¨à¦¿à¦• à¦•à§‹-à¦•à¦¾à¦°à¦¿à¦•à§à¦²à¦¾à¦° à¦•à¦¾à¦°à§à¦¯à¦•à§à¦°à¦®",
              ],
            },
            {
              title: "à¦®à¦¿à¦¡à¦² (à¦—à§à¦°à§‡à¦¡ à§¬-à§®)",
              details: [
                "à¦ªà§‚à¦°à§à¦¬à¦¬à¦°à§à¦¤à§€ à¦Ÿà¦¾à¦°à§à¦®à§‡à¦° à¦¨à§à¦¯à§‚à¦¨à¦¤à¦® GPA",
                "à¦‡à¦‚à¦°à§‡à¦œà¦¿ à¦“ à¦—à¦£à¦¿à¦¤ à¦ªà§à¦²à§‡à¦¸à¦®à§‡à¦¨à§à¦Ÿ",
                "à¦à¦šà§à¦›à¦¿à¦• à¦­à¦¾à¦·à¦¾ à¦‰à¦¨à§à¦¨à§Ÿà¦¨ à¦ªà§à¦°à§‹à¦—à§à¦°à¦¾à¦®",
              ],
            },
            {
              title: "à¦¸à¦¿à¦¨à¦¿à§Ÿà¦° (à¦—à§à¦°à§‡à¦¡ à§¯-à§§à§¨)",
              details: [
                "à¦¬à¦¿à¦·à§Ÿ à¦¨à¦¿à¦°à§à¦¬à¦¾à¦šà¦¨à§‡ à¦•à¦¾à¦‰à¦¨à§à¦¸à§‡à¦²à¦¿à¦‚",
                "à¦†à¦¬à¦¶à§à¦¯à¦¿à¦• à¦­à¦°à§à¦¤à¦¿ à¦ªà¦°à§€à¦•à§à¦·à¦¾ à¦“ à¦‡à¦¨à§à¦Ÿà¦¾à¦°à¦­à¦¿à¦‰",
                "à¦•à§à¦¯à¦¾à¦°à¦¿à§Ÿà¦¾à¦° à¦—à¦¾à¦‡à¦¡à§‡à¦¨à§à¦¸ à¦¸à§‡à¦¶à¦¨",
              ],
            },
          ],
        },
        list: {
          heading: "à¦­à¦°à§à¦¤à¦¿ à¦¤à¦¾à¦²à¦¿à¦•à¦¾ (à¦¡à§‡à¦®à§‹)",
          subtitle: "à¦‰à¦ªà¦¸à§à¦¥à¦¾à¦ªà¦¨à¦¾à¦° à¦œà¦¨à§à¦¯ à¦¸à§à¦Ÿà§à¦¯à¦¾à¦Ÿà¦¿à¦• à¦¨à¦®à§à¦¨à¦¾ à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¥¤",
          items: [
            { name: "à¦¨à¦¾à¦¹à¦¿à¦¦ à¦¹à¦¾à¦¸à¦¾à¦¨", grade: "à¦—à§à¦°à§‡à¦¡ à§«", status: "à¦¨à¦¿à¦°à§à¦¬à¦¾à¦šà¦¿à¦¤" },
            { name: "à¦¤à¦¾à¦¸à¦¨à¦¿à¦® à¦†à¦°à¦¾", grade: "à¦—à§à¦°à§‡à¦¡ à§®", status: "à¦‡à¦¨à§à¦Ÿà¦¾à¦°à¦­à¦¿à¦‰" },
            { name: "à¦°à¦¾à¦«à¦¿ à¦‡à¦¸à¦²à¦¾à¦®", grade: "à¦—à§à¦°à§‡à¦¡ à§§à§¦", status: "à¦…à¦ªà§‡à¦•à§à¦·à¦®à¦¾à¦£" },
          ],
        },
        downloads: {
          heading: "à¦¡à¦¾à¦‰à¦¨à¦²à§‹à¦¡",
          subtitle: "à¦ªà§à¦°à¦¸à§à¦ªà§‡à¦•à§à¦Ÿà¦¾à¦¸, à¦•à§à¦¯à¦¾à¦²à§‡à¦¨à§à¦¡à¦¾à¦° à¦“ à¦¨à§€à¦¤à¦¿à¦®à¦¾à¦²à¦¾à¥¤",
          downloadLabel: "à¦¡à¦¾à¦‰à¦¨à¦²à§‹à¦¡",
          items: [
            { title: "à¦­à¦°à§à¦¤à¦¿ à¦ªà§à¦°à¦¸à§à¦ªà§‡à¦•à§à¦Ÿà¦¾à¦¸", tag: "PDF", updated: "à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à¦¿ à§¨à§¦à§¨à§¬" },
            { title: "à¦à¦•à¦¾à¦¡à§‡à¦®à¦¿à¦• à¦•à§à¦¯à¦¾à¦²à§‡à¦¨à§à¦¡à¦¾à¦°", tag: "PDF", updated: "à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦° à§¨à§¦à§¨à§«" },
            { title: "à¦¸à§à¦•à§à¦² à¦¨à§€à¦¤à¦¿à¦®à¦¾à¦²à¦¾", tag: "PDF", updated: "à¦¨à¦­à§‡à¦®à§à¦¬à¦° à§¨à§¦à§¨à§«" },
          ],
        },
        faq: {
          heading: "à¦­à¦°à§à¦¤à¦¿ à¦ªà§à¦°à¦¶à§à¦¨à§‹à¦¤à§à¦¤à¦°",
          subtitle: "à¦…à¦­à¦¿à¦­à¦¾à¦¬à¦•à¦¦à§‡à¦° à¦¸à¦¾à¦§à¦¾à¦°à¦£ à¦ªà§à¦°à¦¶à§à¦¨à§‡à¦° à¦‰à¦¤à§à¦¤à¦°à¥¤",
          items: [
            {
              question: "à¦•à§‹à¦¨ à¦•à§‹à¦¨ à¦•à¦¾à¦—à¦œà¦ªà¦¤à§à¦° à¦²à¦¾à¦—à¦¬à§‡?",
              answer:
                "à¦ªà§‚à¦°à§à¦¬à§‡à¦° à¦°à¦¿à¦ªà§‹à¦°à§à¦Ÿ à¦•à¦¾à¦°à§à¦¡, à¦œà¦¨à§à¦® à¦¸à¦¨à¦¦, à¦ªà¦¾à¦¸à¦ªà§‹à¦°à§à¦Ÿ à¦›à¦¬à¦¿ à¦“ à¦…à¦­à¦¿à¦­à¦¾à¦¬à¦•à§‡à¦° à¦à¦¨à¦†à¦‡à¦¡à¦¿à¥¤",
            },
            {
              question: "à¦­à¦°à§à¦¤à¦¿ à¦ªà¦°à§€à¦•à§à¦·à¦¾ à¦†à¦›à§‡ à¦•à¦¿?",
              answer: "à¦¹à§à¦¯à¦¾à¦, à¦‡à¦‚à¦°à§‡à¦œà¦¿ à¦“ à¦—à¦£à¦¿à¦¤ à¦®à§‚à¦²à§à¦¯à¦¾à§Ÿà¦¨ à¦à¦¬à¦‚ à¦¸à¦‚à¦•à§à¦·à¦¿à¦ªà§à¦¤ à¦‡à¦¨à§à¦Ÿà¦¾à¦°à¦­à¦¿à¦‰à¥¤",
            },
            {
              question: "à¦•à¦¿à¦¸à§à¦¤à¦¿à¦¤à§‡ à¦«à¦¿ à¦¦à§‡à¦“à§Ÿà¦¾ à¦¯à¦¾à¦¬à§‡?",
              answer: "à¦—à§à¦°à§‡à¦¡ à§¬-à§§à§¨ à¦à¦° à¦œà¦¨à§à¦¯ à¦•à¦¿à¦¸à§à¦¤à¦¿à¦° à¦¸à§à¦¬à¦¿à¦§à¦¾ à¦°à§Ÿà§‡à¦›à§‡à¥¤",
            },
          ],
        },
      },
    },
  }[language];

  return (
    <div className="space-y-16 pb-28">
      <section className="relative overflow-hidden px-3 pt-12 md:px-4 md:pt-20 2xl:px-0">
        <div className="mx-auto grid max-w-screen-2xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge variant="info">{content.hero.badge}</Badge>
            <h1 className="text-4xl font-semibold text-[var(--color-ink)] md:text-5xl lg:text-6xl text-balance">
              {content.hero.title}
            </h1>
            <p className="text-base text-[var(--color-muted)] md:text-lg">
              {content.hero.subtitle}
            </p>
            <p className="text-sm text-[var(--color-muted)] md:text-base">
              {content.hero.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="gold" asChild size="lg">
                <Link href="/student">{content.hero.ctas.primary}</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/contact">{content.hero.ctas.secondary}</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4">
              {content.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-white)] px-4 py-3 text-sm shadow-sm"
                >
                  <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                    {stat.label}
                  </p>
                  <p className="text-lg font-semibold text-[var(--color-ink)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Card className="relative overflow-hidden border-none bg-[var(--color-white)] text-[var(--color-ink)] shadow-[0_30px_80px_rgba(12,27,51,0.2)]">
            <CardHeader className="space-y-2">
              <Badge variant="warn">{content.map.title}</Badge>
              <CardTitle className="text-2xl">{content.map.subtitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-[var(--color-line)]">
                <iframe
                  title="Habiba International School Map"
                  src="https://maps.google.com/maps?q=29%20Al%20Madina%20Road%20Mirpur%201%20Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-[300px] w-full md:h-[360px]"
                  loading="lazy"
                />
              </div>
              <Button variant="outline" asChild className="w-full">
                <a
                  href="https://maps.google.com/maps?q=29%20Al%20Madina%20Road%20Mirpur%201%20Dhaka"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin className="h-4 w-4" />
                  {content.map.linkLabel}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-3 md:px-3 2xl:px-0">
        <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <SectionHeading
              title={content.about.heading}
              subtitle={content.about.subtitle}
            />
            <p className="text-base text-[var(--color-muted)] md:text-lg">
              {content.about.summary}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {content.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-white)] px-4 py-3 text-sm"
                >
                  <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                    {stat.label}
                  </p>
                  <p className="text-lg font-semibold text-[var(--color-ink)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Card className="border-none bg-[var(--color-blue-100)]">
            <CardHeader>
              <CardTitle>{content.about.leadership.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-[var(--color-muted)]">
              <p>&quot;{content.about.leadership.quote}&quot;</p>
              <p className="font-semibold text-[var(--color-ink)]">
                {content.about.leadership.name}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-3 md:px-3 2xl:px-0">
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading
            title={content.about.pillarsHeading}
            subtitle={content.about.pillarsSubtitle}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {content.about.highlights.map((item, index) => (
              <Card
                key={item.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <CardHeader>
                  <item.icon className="h-6 w-6 text-[var(--color-blue-700)]" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--color-muted)]">
                    {item.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 md:px-3 2xl:px-0">
        <div className="mx-auto max-w-screen-2xl space-y-6 rounded-[var(--radius)] border border-[var(--color-line)] bg-[var(--color-white)] p-8">
          <SectionHeading
            title={content.about.campus.heading}
            subtitle={content.about.campus.subtitle}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {content.about.campus.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[var(--color-blue-100)] p-4"
              >
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  {item.title}
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 md:px-3 2xl:px-0">
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading
            title={content.admissions.heading}
            subtitle={content.admissions.subtitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {content.admissions.steps.map((step, index) => (
              <Card
                key={step.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="info">
                      {content.admissions.stepLabel} {index + 1}
                    </Badge>
                    <ClipboardCheck className="h-5 w-5 text-[var(--color-blue-700)]" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[var(--color-muted)]">
                  {step.detail}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 md:px-3 2xl:px-0">
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading
            title={content.admissions.programs.heading}
            subtitle={content.admissions.programs.subtitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {content.admissions.programs.items.map((program) => (
              <Card key={program.title}>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2 text-sm text-[var(--color-muted)]">
                  {program.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 md:px-3 2xl:px-0">
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading
            title={content.admissions.list.heading}
            subtitle={content.admissions.list.subtitle}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {content.admissions.list.items.map((notice, index) => (
              <Card
                key={notice.name}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="info">{notice.status}</Badge>
                  </div>
                  <CardTitle>{notice.name}</CardTitle>
                  <p className="text-sm text-[var(--color-muted)]">
                    {notice.grade}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 md:px-3 2xl:px-0">
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading
            title={content.admissions.downloads.heading}
            subtitle={content.admissions.downloads.subtitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {content.admissions.downloads.items.map((item, index) => (
              <Card
                key={item.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardHeader>
                  <Badge variant="warn">{item.tag}</Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <p className="text-sm text-[var(--color-muted)]">
                    {item.updated}
                  </p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4" />
                    {content.admissions.downloads.downloadLabel}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 md:px-3 2xl:px-0 pb-6">
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading
            title={content.admissions.faq.heading}
            subtitle={content.admissions.faq.subtitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {content.admissions.faq.items.map((item) => (
              <Card key={item.question}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[var(--color-muted)]">
                  {item.answer}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <MusicPlayer />
    </div>
  );
}




