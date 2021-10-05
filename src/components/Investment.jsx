import { helperGetMonthDescription } from '../helpers/dateHelper';
import MoneyFormatter from './MoneyFormatter';
import PercentageFormatter from './PercentageFormatter';

export default function Investment({ children: investmentData }) {
  const { investment, report } = investmentData;
  const { description, initialValue, finalValue, totalPercent } = investment;

  const balance = finalValue - initialValue;

  const balanceColor = balance >= 0 ? 'text-green-600' : 'text-red-900';

  return (
    <div className='border n-2 p-2'>
      <h2 className='text-center font-bold text-lg'>
        {description}
      </h2>

      <h3 className='text-center justify-center font-bold'>
        Rendimento total: {' '}
        <span className={balanceColor}>
          <MoneyFormatter>{balance}</MoneyFormatter>
          (<PercentageFormatter>{totalPercent}</PercentageFormatter>)
        </span>{' '}
      </h3>

      <ul className='mt-4'>
        {report.map(({ id, month, year, value, percentage }) => {
          const valueColor = percentage === 0 ? 'text-black' : percentage > 0 ? 'text-green-600' : 'text-red-900';
          return (
            <li key={id} className='flex flex-row items-center justify-between space-x-4'>
              <span className='font-mono'>
                {helperGetMonthDescription(month)}/{year}
              </span>
              <span className={`flex-grow ${valueColor}`}><MoneyFormatter>{value}</MoneyFormatter></span>
              <span className={valueColor}><PercentageFormatter>{percentage}</PercentageFormatter></span>
            </li>
          );
        })
        }
      </ul>
    </div>
  );
}
