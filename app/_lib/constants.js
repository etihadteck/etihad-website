import {
  HiInboxArrowDown,
  HiBuildingLibrary,
  HiCheckCircle,
} from 'react-icons/hi2';
import { GiCargoShip } from 'react-icons/gi';

export const SHIPMENT_STATUSES = {
  'collected-in-china': {
    label: 'في الصين',
    color: 'text-orange-600',
    bgColor: 'bg-accent-50',
    borderColor: 'border-blue-200',
    description:
      'تم جمع الشحنة من المورد في الصين, وبنجهزها للشحن باسرع وقت 🚶',
  },
  'in-ocean': {
    label: 'في البحر',
    color: 'text-purple-600',
    bgColor: 'bg-accent-50',
    borderColor: 'border-purple-200',
    description: 'الشحنة جاية بالطريق للميناء 🚢',
  },
  'reached-harbor': {
    label: 'في الميناء',
    color: 'text-blue-600',
    bgColor: 'bg-accent-50',
    borderColor: 'border-orange-200',
    description: 'تم وصول الشحنة الى الميناء 🚢',
  },
  'in-storage-ready': {
    label: 'في المستودع',
    color: 'text-green-600',
    bgColor: 'bg-accent-50',
    borderColor: 'border-green-200',
    description: 'الشحنة في المستودع, وجاهزة للاستلام ✅',
  },
};

export const SHIPMENT_STATUS_OPTIONS = [
  {
    value: 'collected-in-china',
    label: 'تم الاستلام في الصين',
    icon: <HiInboxArrowDown className="text-primary h-10 w-10" />,
  },
  {
    value: 'in-ocean',
    label: 'الشحنة في البحر',
    icon: <GiCargoShip className="text-primary h-10 w-10" />,
  },
  {
    value: 'reached-harbor',
    label: 'وصلت الشحنة للميناء',
    icon: <HiBuildingLibrary className="text-primary h-10 w-10" />,
  },
  {
    value: 'in-storage-ready',
    label: 'تم تسليم الشحنة',
    icon: <HiCheckCircle className="text-primary h-10 w-10" />,
  },
];
