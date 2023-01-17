import './MobileNav.scss';
import cn from 'classnames';

export const MobileNav = ({ planets }) => {
  return (
    <nav className={cn(
      'Mobile-Nav Main__Mobile-Nav',
      {
        'Mobile-Nav--Hidden': false,
      },
    )}>
      <ul className="Mobile-Nav__List">
        {planets.map(planet => (
          <li className="Mobile-Nav__Item" key={planet}>
            <button
              type="button"
              className={`Mobile-Nav__Link Mobile-Nav__Link--${planet}`}
              onClick={() => {}}
            >
              { planet }
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
};
