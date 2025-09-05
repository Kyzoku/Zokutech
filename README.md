# AutoFS for YouTube

**Description:**  
AutoFS for YouTube is a PowerShell script for Windows that will enter and exit fullscreen mode in YouTube videos depending on it's play status.  This works best when used in conjunction with an extension that stops autoplay.  
  
**Explanation:**  
When clicking on the video to play it will add [YT-PLAYING] to the tab title which the AutoHotkey EXE will see and then trigger fullscreen.  When pausing the video it will add [YT-PAUSED] to the tab title and the AutoHotkey EXE will exit fullscreen.  The userscript also adds a button to the YouTube video underneath the progress bar that is a red circle.  Clicking this button will change the icon to green and will give you back full control, allowing you to pause and remain in fullscreen or play and not be in fullscreen.
  
**Requirements:**  
PowerShell 7+  
Tampermonkey, Violentmonkey or similar.  
  
**Instructions:**  
*Step 1.*  
- Unzip "AutoFS.for.YouTube.zip".  
<br/>

*Step 2. (Install PowerShell 7+.  If already installed you may skip this step.)*  
- Run PowerShell or Windows Terminal as Administrator.  
  - Press Win + X then Select PowerShell or Terminal (Admin)  

- Install PowerShell 7+ with Winget OR with PowerShell MSI Installer.  
  - Only perform one of the following, not both.  
  - Paste the following and press enter.
  -     winget install --id Microsoft.PowerShell --source winget  
  - Paste the following and press enter.  
  -     Start-Process msiexec.exe -ArgumentList "/i `"$env:USERPROFILE\Downloads\PowerShell-7.x.x-win-x64.msi`" /quiet /norestart" -Wait
<br/>

*Step 3. (Install Userscript Manager. If already installed you may skip this step.)*  
- Instructions for Chrome:  
  - Install Tampermonkey  
  -     https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
  - Enable Developer Mode (Top-Right of Page)  
  -     chrome://extensions  


- Instructions for Edge:  
  - Install Tampermonkey or Violentmonkey  
    - Tampermonkey  
    -     https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd
    - Violentmonkey  
    -     https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao
    - Enable Developer Mode (Left-side of Page)  
    -     edge://extensions


 - Instructions for Firefox:
   - Install Tampermonkey or Violentmonkey
      - Tampermonkey  
      -     https://addons.mozilla.org/en-US/firefox/addon/tampermonkey
      - Violentmonkey  
      -     https://addons.mozilla.org/en-US/firefox/addon/violentmonkey
<br/>

*Step 4.*  
 - Navigate to the directory you unzipped "AutoFS.for.YouTube.zip" to.
 - Run "Setup.exe"  
    - A PowerShell windows should appear and you will have 4 options available to you.  
      - 1. Install via Chrome
      - 2. Install via Edge  
      - 3. Install via Firefox  
      - 4. Exit  
    - Select the option for the browser you wish to install to (Alternatives such as Brave, Vivaldi, LibreWolf, Waterfox, etc. likely will not work as this looks for chrome.exe, msedge.exe, and firefox.exe specifically).  
    - This will open the browser of choice and load the user.js from this GitHub.
    - Click Install in the tab that opens.  
    - On occasions I've noticed Edge just downloads the user.js file for some reason.  If the window to click install doesn't appear and this happens just run the option again in the PowerShell window.  
    - The installer will also copy "AutoFS for YouTube.exe" to "C:\Program Files\AutoHotkey\Hotkeys" and will also create a windows startup shortcut in "C:\Users\<username>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup"  

This was created for use by maintainers, but is *probably safe* for public use.  No login required.
