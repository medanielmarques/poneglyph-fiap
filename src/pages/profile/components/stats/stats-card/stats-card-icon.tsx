import { FaBolt, FaBug, FaFireAlt, FaMedal } from 'react-icons/fa';
import { StatsCardIconType } from '.';

interface StatsCardIconProps {
  icon: StatsCardIconType;
}

export const StatsCardIcon = ({ icon }: StatsCardIconProps) => {
  const style = {
    marginTop: '5px',
    fontSize: '24px',
  };

  if (icon === 'streak') {
    return <FaFireAlt color='#ff9601' style={style} />;
  }

  if (icon === 'xp') {
    return <FaBolt color='#ffda00' style={style} />;
  }

  if (icon === 'level') {
    return <FaBug color='#3cbaf8' style={style} />;
  }

  if (icon === 'division') {
    return <FaMedal color='#ff7c91' style={style} />;
  }

  return <></>;
};
