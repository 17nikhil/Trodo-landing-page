import React from 'react';
import ios from '../images/ios.svg';
import android from '../images/android.svg';

function Download() {

    /* Links to both the App store and the Play store */

    const iOSUrl = 'https://apps.apple.com/us/app/trodo/id1590261061';
    const androidUrl = 'https://play.google.com/store/apps/details?id=info.trodo.trodo';

    return (
        <div id='download'>
            <h1>Download the future of productivity</h1>
            <div className='d-container'>
                <div className='d-box'>
                    <div className='qr-img'>
                        <img src={ios} alt='QR code which leads to the App Store'></img>
                    </div>
                    <a href={iOSUrl} className='download-btn'>Apple App Store</a>
                </div>
                <div className='d-box'>
                    <div className='qr-img'>
                        <img src={android} alt='QR code which leads to the Play Store'></img>
                    </div>
                    <a href={androidUrl} className='download-btn'>Google Play Store</a>
                </div>
            </div>
        </div>
    )
}

export default Download;
