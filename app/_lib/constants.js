export const SHIPMENT_STATUSES = {
  'collected-in-china': {
    label: 'في الصين',
    color: 'text-orange-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description:
      'تم جمع الشحنة من المورد في الصين, وبنجهزها للشحن باسرع وقت 🚶',
  },
  'in-ocean': {
    label: 'في البحر',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'الشحنة جاية بالطريق للميناء 🚢',
  },
  'reached-harbor': {
    label: 'في الميناء',
    color: 'text-blue-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    description: 'تم وصول الشحنة الى الميناء 🚢',
  },
  'in-storage-ready': {
    label: 'في المستودع',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'الشحنة في المستودع, وجاهزة للاستلام ✅',
  },
};

export const SHIPMENT_STATUS_OPTIONS = [
  { value: 'collected-in-china', label: 'في الصين' },
  { value: 'in-ocean', label: 'في البحر' },
  { value: 'reached-harbor', label: 'في الميناء' },
  { value: 'in-storage-ready', label: 'في المستودع' },
];
