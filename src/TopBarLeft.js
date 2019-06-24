
import React, { useContext } from 'react';
import { AbsoluteLink as Link } from './router/wrappers';
import { ReactComponent as Logo } from './logo-idr.svg';
import SettingsContext from './model/context';

export default function TopBarLeft() {

  const gallerySettings = useContext(SettingsContext)

  let topLinks = [];
  if (gallerySettings.SUPER_CATEGORIES) {
      for (let category in gallerySettings.SUPER_CATEGORIES) {
      topLinks.push({...gallerySettings.SUPER_CATEGORIES[category], id:category})
      }
  }

  return (
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu="219f5j-dropdown-menu" role="menubar">
        <li role="menuitem">
          <Link to="/" className="logo">
            <Logo />
          </Link>
        </li>
        {topLinks.map(category => (
          <li key={category.id} role="menuitem">
          <Link to={`/${ category.id }/`}>
            { category.label}
          </Link>
        </li>
        ))}
      </ul>
    </div>
  )
}