import {
  UserPlus,
  FileEdit,
  Upload,
  Settings,
  DollarSign,
  Share2,
  Monitor,
} from "lucide-react";

export const howItWorks = [
  {
    title: "Register & Get Started",
    description:
      "Sign up on our platform and create your E.I.M.A account effortlessly.",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Share Your Requirements",
    description: "Tell us about your organization's AI needs and preferences.",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Upload Your Knowledge Base",
    description:
      "Provide documents and data to train your AI agents effectively.",
    icon: <Upload className="w-8 h-8 text-primary" />,
  },
  {
    title: "Choose Your LLM Model",
    description:
      "Select the language model that best fits your service requirements.",
    icon: <Settings className="w-8 h-8 text-primary" />,
  },
  {
    title: "Select Billing Method",
    description: "Pick a pricing plan that suits your usage and budget.",
    icon: <DollarSign className="w-8 h-8 text-primary" />,
  },
  {
    title: "Deploy AI Agent Entry Point",
    description:
      "Export and integrate your AI agent seamlessly into your system.",
    icon: <Share2 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Update & Broadcast Instantly",
    description:
      "Easily upload new information to train your AI agents anytime and send notifications to individuals or entire groups instantly.",
    icon: <Monitor className="w-8 h-8 text-primary" />,
  },

  {
    title: "Manage & Optimize",
    description:
      "Monitor and improve your AI agents through our interactive dashboard.",
    icon: <Monitor className="w-8 h-8 text-primary" />,
  },
];
