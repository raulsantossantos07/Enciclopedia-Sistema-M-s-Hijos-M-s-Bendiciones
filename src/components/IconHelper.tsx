import React from 'react';
import {
  Crown,
  Heart,
  Music,
  Shield,
  Brain,
  Sparkles,
  Utensils,
  Flame,
  Sword,
  Coffee,
  Snowflake,
  Skull,
  Zap,
  Eye,
  Star,
  Navigation,
  ShieldAlert,
  UserX,
  Globe,
  Activity,
  User,
  Users,
  Compass,
  BookOpen,
  Award,
  Layers,
  Search,
  CheckCircle2,
  AlertTriangle,
  Gift,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className = "w-5 h-5" }) => {
  switch (name) {
    case 'Crown': return <Crown className={className} />;
    case 'Heart': return <Heart className={className} />;
    case 'Music': return <Music className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Utensils': return <Utensils className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'Sword': return <Sword className={className} />;
    case 'Cross': return <Activity className={className} />;
    case 'Coffee': return <Coffee className={className} />;
    case 'Snowflake': return <Snowflake className={className} />;
    case 'Skull': return <Skull className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Eye': return <Eye className={className} />;
    case 'Star': return <Star className={className} />;
    case 'Navigation': return <Navigation className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'UserX': return <UserX className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Search': return <Search className={className} />;
    case 'CheckCircle2': return <CheckCircle2 className={className} />;
    case 'AlertTriangle': return <AlertTriangle className={className} />;
    case 'Gift': return <Gift className={className} />;
    case 'RefreshCw': return <RefreshCw className={className} />;
    case 'ExternalLink': return <ExternalLink className={className} />;
    case 'ChevronDown': return <ChevronDown className={className} />;
    case 'ChevronUp': return <ChevronUp className={className} />;
    case 'Info': return <Info className={className} />;
    default: return <User className={className} />;
  }
};
