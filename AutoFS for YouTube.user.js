// ==UserScript==
// @name         AutoFS for YouTube
// @version      1.31
// @license      none
// @description  Automatically enters fullscreen when video plays, exits when paused or ended.
// @author       Kryzalin & Microsoft Copilot
// @match        *://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const video = document.querySelector('video');

    function updateTitle(state) {
		const suffix = `YT-${state}`;
		const baseTitle = document.title.replace(/ - YT-(PLAYING|PAUSED|ENDED|STOP)/g, '');
		if (document.title.includes(suffix)) return;
		document.title = `${baseTitle} - ${suffix}`;
	}

	document.addEventListener('fullscreenchange', () => {
		applyAutoFSStyle(!!document.fullscreenElement);
	});

    function applyAutoFSStyle(isFullscreen) {
        const btn = document.getElementById('yt-toggle-autofs');
        if (!btn) return;

        // Browser detection
        const ua = navigator.userAgent;
        const isFirefox = ua.includes("Firefox");
        const isEdge = ua.includes("Edg");
        const isChrome = ua.includes("Chrome") && !isEdge;

        // Base styles
        btn.style.cursor = 'pointer';
        btn.style.opacity = isFullscreen ? '0.9' : '0.8';
        btn.style.height = isFullscreen ? '30px' : '26px';
        btn.style.width = isFullscreen ? '30px' : '26px';

        // Browser-specific positioning
        if (isChrome) {
            btn.style.marginTop = isFullscreen ? '10px' : '10px';
            btn.style.marginLeft = isFullscreen ? '10px' : '10px';
        } else if (isFirefox) {
            btn.style.marginTop = isFullscreen ? '10px' : '10px';
            btn.style.marginRight = isFullscreen ? '14px' : '14px';
        } else if (isEdge) {
            btn.style.marginTop = isFullscreen ? '9px' : '8px';
            btn.style.marginLeft = isFullscreen ? '12px' : '12px';
        }
}

  let disabled = false;

	function injectToggleButton() {
		const controls = document.querySelector('.ytp-left-controls');
		if (!controls || document.getElementById('yt-toggle-autofs')) return;

		const btn = document.createElement('img');
		btn.id = 'yt-toggle-autofs';
		btn.src = 'https://raw.githubusercontent.com/Kyzoku/Zokutech/refs/heads/main/Images/AutoFS-ON.png';
		btn.style.height = '26px';
		btn.style.width = '26px';
		btn.style.marginLeft = '10px';
		btn.style.marginTop = '10px';
		btn.style.cursor = 'pointer';
		btn.style.opacity = '0.8';

		btn.onclick = () => {
        disabled = !disabled;
        const baseTitle = document.title.replace(/ - YT-(PLAYING|PAUSED|ENDED|STOP)/g, '');

        document.title = `${baseTitle} - ${disabled ? "YT-STOP" : "YT-PAUSED"}`;

        btn.src = disabled
            ? 'https://raw.githubusercontent.com/Kyzoku/Zokutech/refs/heads/main/Images/AutoFS-OFF.png'
            : 'https://raw.githubusercontent.com/Kyzoku/Zokutech/refs/heads/main/Images/AutoFS-ON.png';
    };

    controls.appendChild(btn);
}

    if (video) {
        video.addEventListener('play', () => {
            if (!disabled) updateTitle("PLAYING");
        });

        video.addEventListener('pause', () => {
            if (!disabled) updateTitle("PAUSED");
        });

        video.addEventListener('ended', () => {
            if (!disabled) updateTitle("ENDED");
        });

		injectToggleButton();
		applyAutoFSStyle(!!document.fullscreenElement);
    }
})();
