import { getPackageById } from '@/app/_lib/data-service';
import { SHIPMENT_STATUSES } from '@/app/_lib/constants';
import BackButton from '@/app/_components/BackButton';
import PackageDetailsClient from './PackageDetailsClient';
import ProgressBar from './ProgressBar';

export default async function PackageDetails({ packageId }) {
  const packageData = await getPackageById(packageId);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 z-10 flex w-full justify-end">
        <BackButton />
      </div>
      <div className="bg-primary-900 xs:px-10 2xs:px-4 grid grid-cols-2 gap-4 rounded-xl px-1 py-16 text-xs sm:text-sm lg:gap-16 lg:text-base">
        <div className="grid grid-cols-1 gap-2">
          <p>رقم الشحنة</p>
          <p className="bg-accent-50 text-accent-700 mx-auto w-full rounded-md py-2 text-center lg:px-24">
            {packageData.packageId}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <p>حالة الشحنة</p>
          <p
            className={`${SHIPMENT_STATUSES[packageData.status].color} ${SHIPMENT_STATUSES[packageData.status].bgColor} ${SHIPMENT_STATUSES[packageData.status].borderColor} text-center" w-full rounded-md px-6 py-2`}
          >
            {SHIPMENT_STATUSES[packageData.status].label}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <p>تاريخ الوصول المتوقع</p>
          <p className="bg-accent-50 text-accent-700 w-full rounded-md px-3 py-2 text-center">
            {packageData.arrivalDate}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <p>تكلفة الشحن</p>
          <p className="bg-accent-50 text-accent-700 w-full rounded-md px-6 py-2 text-center">
            {packageData.price}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <p>عدد الكراتين الاجمالي</p>
          <p className="bg-accent-50 text-accent-700 w-full rounded-md px-6 py-2 text-center">
            {packageData.totalCount}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <p>اجمالي المساحة(CBM)</p>
          <p className="bg-accent-50 text-accent-700 w-full rounded-md px-6 py-2 text-center">
            {packageData.cbm}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <p>الرقم التسلسلي</p>
          <p className="bg-accent-50 text-accent-700 w-full rounded-md px-6 py-2 text-center">
            {packageData.serialNumber}
          </p>
        </div>

        {packageData.destination && (
          <div className="grid grid-cols-1 gap-2">
            <p>الوجهة</p>
            <p className="bg-accent-50 text-accent-700 w-full rounded-md px-6 py-2 text-center">
              {packageData.destination}
            </p>
          </div>
        )}

        {packageData.status && (
          <div className="col-span-full">
            <ProgressBar status={packageData.status} />
          </div>
        )}
      </div>

      <PackageDetailsClient packageId={packageId} />
    </div>
  );
}
