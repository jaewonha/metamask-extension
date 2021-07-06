import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/ui/button';

export default class InfoTab extends PureComponent {
  state = {
    version: global.platform.getVersion(),
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  renderInfoLinks() {
    const { t } = this.context;

    return (
      <div className="settings-page__content-item settings-page__content-item--without-height">
        <div className="info-tab__link-header">{t('links')}</div>
        <div className="info-tab__link-item">
          <Button
            type="link"
            href="https://mdl-design.s3.ap-northeast-2.amazonaws.com/wallet/medium_weallet_policy_privacy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="info-tab__link-text"
          >
            {t('privacyMsg')}
          </Button>
        </div>
        <div className="info-tab__link-item">
          <Button
            type="link"
            href="https://mdl-design.s3.ap-northeast-2.amazonaws.com/wallet/medium_weallet_policy_term.html"
            target="_blank"
            rel="noopener noreferrer"
            className="info-tab__link-text"
          >
            {t('terms')}
          </Button>
        </div>
        <div className="info-tab__link-item">
          <Button
            type="link"
            href="https://mdl-design.s3.ap-northeast-2.amazonaws.com/wallet/medium_weallet_attributions.html"
            target="_blank"
            rel="noopener noreferrer"
            className="info-tab__link-text"
          >
            {t('attributions')}
          </Button>
        </div>
        <hr className="info-tab__separator" />


        {/* <div className="info-tab__link-item">
          <Button
            type="link"
            href="https://support.metamask.io"
            target="_blank"
            rel="noopener noreferrer"
            className="info-tab__link-text"
          >
            {t('supportCenter')}
          </Button>
        </div> */}

        <div className="info-tab__link-item">
          <Button
            type="link"
            href="https://themedium.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="info-tab__link-text"
          >
            {t('visitWebSite')}
          </Button>
        </div>
        
        <div className="info-tab__link-item">
          <Button
            type="link"
            href="mailto:support.wallet@themedium.io"
            target="_blank"
            rel="noopener noreferrer"
            className="info-tab__link-text"
          >
            {t('contactUs')}
          </Button>
        </div>
      </div>
    );
  }

  render() {
    const { t } = this.context;

    return (
      <div className="settings-page__body">
        <div className="settings-page__content-row">
          <div className="settings-page__content-item settings-page__content-item--without-height">
            <div className="info-tab__item">
              <div className="info-tab__version-header">
                {t('metamaskVersion')}
              </div>
              <div className="info-tab__version-number">
                {this.state.version}
              </div>
            </div>
            <div className="info-tab__item">
              <div className="info-tab__about">{t('builtInCalifornia')}</div>
            </div>
          </div>
          {this.renderInfoLinks()}
        </div>
        <div className="info-tab__logo-wrapper">
          <img src="images/wallet.svg" className="info-tab__logo" alt="" />
        </div>
      </div>
    );
  }
}
