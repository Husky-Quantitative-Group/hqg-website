import React from 'react';
import outcomesData from '../../data/outcomes.json';

const logoAssets = {
  ...import.meta.glob('../../assets/logos/*', { eager: true, import: 'default' }),
  ...import.meta.glob('../../assets/logos/companies/*', { eager: true, import: 'default' }),
};

const logoAssetMap = Object.entries(logoAssets).reduce((acc, [path, src]) => {
  const filename = path.split('/').pop();
  if (filename) {
    acc[filename] = src;
  }
  return acc;
}, {});

function PlacementLogo({ placement }) {
  const [imageError, setImageError] = React.useState(false);
  const logoSrc = placement.logo ? logoAssetMap[placement.logo] : '';
  const showLogo = Boolean(logoSrc) && !imageError;

  const content = (
    <>
      {showLogo ? (
        <img
          className="placement-ticker__image"
          src={logoSrc}
          alt={placement.company}
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="placement-ticker__label">{placement.company}</span>
      )}
    </>
  );

  if (placement.href) {
    return (
      <a
        className="placement-ticker__item"
        href={placement.href}
        target="_blank"
        rel="noreferrer"
        aria-label={placement.company}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="placement-ticker__item" tabIndex="0" aria-label={placement.company}>
      {content}
    </div>
  );
}

function PlacementTicker() {
  const placements = outcomesData.logos ?? [];
  const marqueeItems = [...placements, ...placements, ...placements];

  return (
    <div className="placement-ticker" aria-label="HQG member placements">
      <div className="placement-ticker__track">
        {marqueeItems.map((placement, index) => (
          <PlacementLogo key={`${placement.company}-${index}`} placement={placement} />
        ))}
      </div>
    </div>
  );
}

export default PlacementTicker;
