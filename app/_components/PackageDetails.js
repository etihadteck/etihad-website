import { getPackageById } from '@/app/_lib/data-service';
import BackButton from '@/app/_components/BackButton';
import ProgressBar from './ProgressBar';
import { SHIPMENT_STATUSES } from '@/app/_lib/constants';
import PackageDetailsClient from './PackageDetailsClient';

export default async function PackageDetails({ packageId }) {
  const packageData = await getPackageById(packageId);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 z-10 flex w-full justify-end">
        <BackButton />
      </div>
      <div className="bg-primary-900 flex flex-col items-center justify-center gap-16 rounded-xl px-10 py-16">
        <p className="text-5xl font-bold">تفاصيل الشحنة</p>

        <div className="flex items-center gap-30">
          <div className="flex items-center gap-2">
            <span>رقم الشحنة</span>
            <span className="bg-accent-50 text-accent-700 rounded-md px-6 py-2 text-center">
              {packageData.packageId}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>تاريخ الوصول</span>
            <span className="bg-accent-50 text-accent-700 rounded-md px-6 py-2 text-center">
              {packageData.arrivalDate}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2">
            <span>حالة الشحنة</span>
            <span
              className={`${SHIPMENT_STATUSES[packageData.status].color} ${SHIPMENT_STATUSES[packageData.status].bgColor} ${SHIPMENT_STATUSES[packageData.status].borderColor} text-center" rounded-md px-6 py-2`}
            >
              {SHIPMENT_STATUSES[packageData.status].label}
            </span>
          </div>
          <p className="text-accent-50">
            {SHIPMENT_STATUSES[packageData.status].description}
          </p>
        </div>
      </div>
      <ProgressBar status={packageData.status} />

      <PackageDetailsClient packageId={packageId} />
    </div>
  );
}
