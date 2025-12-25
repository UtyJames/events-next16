export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  description: string;
}

export const events: Event[] = [
  {
    title: "AI Revolution Summit",
    image: "/images/event1.png",
    slug: "ai-revolution-summit",
    location: "San Francisco, CA",
    date: "2024-11-15",
    time: "09:00 AM",
    description: "Join the leaders of the AI revolution for a day of inspiring talks and workshops.",
  },
  {
    title: "Web3 Future Con",
    image: "/images/event2.png",
    slug: "web3-future-con",
    location: "Austin, TX",
    date: "2024-12-01",
    time: "10:00 AM",
    description: "Exploring the decentralized future of the web.",
  },
  {
    title: "Green Tech Expo",
    image: "/images/event3.png",
    slug: "green-tech-expo",
    location: "Seattle, WA",
    date: "2025-01-20",
    time: "08:30 AM",
    description: "Sustainable technology solutions for a better planet.",
  },
  {
    title: "DevOps World 2025",
    image: "/images/event4.png",
    slug: "devops-world-2025",
    location: "New York, NY",
    date: "2025-02-14",
    time: "09:00 AM",
    description: "Unifying development and operations for faster delivery.",
  },
  {
    title: "CyberSecurity Shield",
    image: "/images/event5.png",
    slug: "cybersecurity-shield",
    location: "London, UK",
    date: "2025-03-10",
    time: "11:00 AM",
    description: "Protecting the digital world from emerging threats.",
  },
];
