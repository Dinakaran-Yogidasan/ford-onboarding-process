export const navItems = [
  {
    id: "0",
    name: "Local Setup-UI",
    description: `
      <p>Follow the below steps to do the local setup UI</p>
      <h4>Step 1: Get Access to Project Repos</h4>
      <p>Make sure you have got the access to Ford repos. if not, reach out to the respective SPOC.</p>
      <p>Note: Please enter <code>{CDSID}_ford</code> in Github username</p>
      <h5>ECOMM repos</h5>
      <ul>
        <li><a class='link' href="https://github.com/ford-innersource/img-23041-mss-ecomimg-aem">Ecomimg AEM</a></li>
        <li><a class='link' href="https://github.com/ford-innersource/img-23041-mss-ecomimg-ngc">Ecomimg NGC</a></li>
        <li><a class='link' href="https://github.com/ford-innersource/img-23041-mss-ecomimg-theme">Ecomimg Theme</a></li>
        <li><a class='link' href="https://github.com/ford-innersource/img-23041-mss-ecomimg-accproductdata">Ecomimg Acc Product Data</a></li>
        <li><a class='link' href="https://github.com/ford-innersource/img-23041-mss-ecomimg-aemaccelerator">Ecomimg AEM Accelerator</a></li>
        <li><a class='link' href="https://github.com/ford-innersource/img-23041-mss-ecomimg-bev-reservation">Ecomimg BEV Resrvation</a></li>
        <li><a class='link' href="https://github.com/ford-innersource/img-23041-mss-ecomimg-cqcommons">Ecomimg CQ Commons</a></li>
      </ul>
      <h5>Brandsite repos</h5>
      <ul>
        <li><a class='link' href="https://github.ford.com/FordAP/AEM_Common">AEM Common</a></li>
        <li><a class='link' href="https://github.com/ford-innersource/img-23041-mss-fordaem">Ford AEM</a></li>
        <li><a class='link' href="https://github.com/ford-innersource/img-23041-mss-fordimgtouchuiaem">Ford Touch UI</a></li>
      </ul>
      <h5>ReImagine repo</h5>
      <ul>
        <li><a class='link' href="https://github.com/ford-innersource/img-23041-mss-dxd-reimagine">Reimagine</a></li>
      </ul>
      <h4>Step 2: Download and Install the Softwares</h4>
      <p>Download the package that is suitable for your machine, either Windows or Mac.</p>
      <ul>
        <li><a class='link' href="https://www.oracle.com/in/java/technologies/javase/jdk11-archive-downloads.html">Java 11</a></li>
        <li><a class='link' href="https://maven.apache.org/docs/3.8.6/release-notes.html">Maven 3.8.6</a></li>
        <li><a class='link' href="https://git-scm.com/downloads">Git</a></li>
        <li><a class='link' href="https://nodejs.org/en/download/package-manager">Node</a></li>
        <li><a class='link' href="https://code.visualstudio.com/download">VS Code Editor</a></li>
        <li><a class='link' href="https://github.com/apps/desktop">Github Desktop</a></li>
      </ul>
      <h4>Step 3: Set Environment variables</h4>
      <p>Setup environment variables <code>JAVA_HOME</code> and <code>M2_HOME</code></p>
      <h5>For Mac</h5>
      <ul>
        <li>Open Terminal, To find Java home <code>/usr/libexec/java_home -V</code></li>
        <li>To create .bash_profile <code>vim .bash_profile</code></li>
        <li>To open .bash_profile <code>open -e .bash_profile</code></li>
        <li>To save .bash_profile <code>source .bash_profile</code></li>
      </ul>
      <p>
        <code>export JAVA_HOME={JAVA_home_link_get_in_first_step}</code><br><code>export PATH=$JAVA_HOME/bin:$PATH</code>
      </p>
      <p>
        <code>export M2_HOME={Path_to_Maven_download}</code><br><code>export PATH=$M2_HOME/bin:$PATH</code>
      </p>
      <h5>For Windows</h5>
      <img src="/images/env-windows.png" alt="Environment variables for Windows" />
      `,
  },
  {
    id: "1",
    name: "Local Setup-AEM",
    description: `<p>Follow the below steps to do the local setup AEM</p>
      <h4>Step 1: Install AEM 6.5 and Service pack</h4>
      <p>Download the jar file of <a class="link" target="_blank" href="https://azureford-my.sharepoint.com/:u:/r/personal/dyogida1_ford_com/Documents/Ford-onboarding/AEM-6.5.zip?csf=1&web=1&e=bTMHcg">AEM 6.5</a> and <a class="link" target="_blank" href="https://azureford-my.sharepoint.com/:u:/r/personal/dyogida1_ford_com/Documents/Ford-onboarding/aem-service-pkg-6.5.11.zip?csf=1&web=1&e=6Ihjer">AEM 6.5.11 service pack</a></p>
      <ul>
        <li>Unzip the AEM package inside a Documents Folder</li>
        <li>
          <details>
            <summary>Goto <code>crx-quickstart/bin</code> and edit <code>start.bat</code> file and update as present in the screenshot below.</summary>
            <img src="/images/start.bat.png" alt="AEM Batch file update" />
          </details>
        </li>
        <li>Start the AEM server by open the <code>start.bat</code> file</li>
        <li>
          <details>
            <summary>Open <a class="link" target="_blank" href="http://localhost:4502/crx/packmgr/index.jsp">AEM Package Manager</a> in a browser. username and password is <code>admin</code></summary>
            <img class="mar-top-20" src="/images/package-mgr.png" alt="AEM Package Manager" />
          </details>
        </li>
        <li>Upload and Install AEM 6.5.11 service pack using Upload Package CTA.</li>
        <li>Upload and Install the packages <code>devops-health-checks.ui.apps-1.0.6</code> and <code>devops-health-checks.all-1.0.6</code> by clicking Upload Package CTA.</li>
      </ul>
      <h4>Step 2: Install Ecomm repos in below order</h4>
      <ul>
        <li>Ecomimg CQ Commons</li>
        <li>Ecomimg Theme</li>
        <li>Ecomimg AEM Accelerator</li>
        <li>Ecomimg Acc Product Data</li>
        <li>Ecomimg AEM</li>
        <li>AEM Common</li>
        <li>Ecomimg NGC</li>
        <li>Ecomimg BEV Resrvation</li>
      </ul>
      <h5>Branch</h5>
      <p><code>master-qa-upstream</code></p>
      <h5>Command</h5>
      <p><code>mvn clean install</code><br><code>mvn clean install -DskipTests -PautoInstallPackage</code></p>
      <h4>Step 3: Install Brandsite repos in below order</h4>
      <ul>
        <li>Ford AEM</li>
        <li>Ford TouchUI</li>
      </ul>
      <h5>Branch</h5>
      <p><code>master-qa-upstream</code></p>
      <h5>Command</h5>
      <p><code>mvn -PautoInstallPackage clean install -Daem.host=localhost -Daem.port=4502 -Denforcer.skip -Dhtl.skip</code></p>
      <p>open => fordaem => vdm alone build it</p>
      <p>open => fordaem => guxfoap alone build it</p>
      <p>open => fordimgtouchuiaem => guxfoap-touchUI alone build it</p>
      <h4>Step 4: Install content packages</h4>
      <ul>
        <li>
          <details>
            <summary>Go to <a class="link" href="https://wwwqa.brandauthoraplb.ford.com/crx/packmgr/index.jsp" target="_blank">QA Package Managaer</a> and create a content package by clicking Create Package CTA.</summary>
            <img class="mar-top-20" src="/images/create-pckg-qa.png" alt="Create Package CTA" />
          </details>
        </li>
        <li>
          <details>
            <summary>Enter a meaningful package name and version as your wish in the dialog</summary>
            <img class="mar-top-20" src="/images/create-pckg-dialog.png" alt="Create Package dialog" />
          </details>
        </li>
        <li>
          <details>
            <summary>Go to Filter tab, click Add Filter CTA to add the content paths</summary>
            <img class="mar-top-20" src="/images/create-pckg-filter.png" alt="Create Package Filter" />
          </details>
        </li>
      </ul>
      <h5>Common Content Paths</h5>
      <ul>
        <li>Ecomm - <code>/content/ecomm-img</code></li>
        <li>Ecomm AU Market specific - <code>/content/ecomm-img/au</code></li>
        <li>Brandsite - <code>/content/ford</code></li>
        <li>Brandsite AU Market specific - <code>/content/ford/au</code></li>
      </ul>`,
  },
  {
    id: "2",
    name: "Github Setup and Process",
    description: `Preparing Content!`,
  },
  {
    id: "3",
    name: "SONAR Cube Process",
    description: `
        <h4>Setup SonarCube in Local Environment</h4>
        <p>If you want to run Sonar cube on a specific repo. open the <code>pom.xml</code> file and update as below</p>
        <p><code>
          &lt;sonar.login&gt;{key_generated_from_sonar_qube_portal}&lt;/sonar.login&gt;</code><br>
          <code>&lt;sonar.branch.name&gt;{branch_you_want_to_run}&lt;/sonar.branch.name&gt;</code><br>
          <code>&lt;sonar.host.url&gt;https://www.sonarqube.ford.com&lt;/sonar.host.url&gt;</code><br>
          <code>&lt;sonar.inclusions&gt;**/abstract500ErrorPageRenderer/abstract500ErrorPageRenderer.html&lt;/sonar.inclusions&gt;
        </code></p>
        <h5>Command</h5>
        <p><code>mvn sonar:sonar</code></p>
        <h5>Sonarqube Portal Link</h5>
        <p><a class="link" target="_blank" href="https://www.sonarqube.ford.com/projects">https://www.sonarqube.ford.com/projects</a></p>
        <h4>To Fix SonarQube Issues under a Project</h4>
        <ul>
          <li>Run the above command in a specific branch</li>
          <li>Open the SonarQube portal and go to the project you ran. filter the branch</li>
          <li>Now you can see the errors under the category you want to fix</li>
          <li>Fix in the code and run the command again to check the error</li>
          <li>Repeat the steps to finish fixing all errors</li>
        </ul>
      `,
  },
  {
    id: "4",
    name: "FOSSA Process",
    description: `<h4>Setup Fossa in Local Environment</h4>
      <p>If you want to run Fossa on a specific repo. create a <code>.fossa.yml</code> file and place in the root of the project</p>
      <p>Add below code into the yaml file</p>  
      <p><code>
          version: {any_number}</code><br>

          <code>server: https://ford.fossa.com</code><br>
          <code>apiKey: {key_generated_from_fossa_portal}</code><br>

          <code>project:</code><br>
            <code>id: {project_id}</code><br>
            <code>name: {project_name}</code><br>
            <code>team: DFY2-23041</code><br>
            <code>policy: Website/Hosted Service Use</code><br>

          <code>revision:</code><br>
            <code>branch: {branch_name_you_want_to_run}<br>
        </code></p>
        <h5>Command</h5>
        <p><code>fossa-analyze</code></p>
        <h5>Fossa Portal Link</h5>
        <p><a class="link" target="_blank" href="https://ford.fossa.com/projects/">https://ford.fossa.com/projects/</a></p>
        <h4>To Fix Fossa Issues under a Project</h4>
        <ul>
          <li>Run the above command in a specific branch</li>
          <li>Report will get generated and uploaded in Fossa portal</li>
          <li>Open the Fossa portal and go to the project you ran. filter the branch</li>
          <li>Now you can see the dependency errors you want to fix</li>
          <li>Fix in the code and run the command again to check the error</li>
          <li>Repeat the steps to finish fixing all errors</li>
        </ul>`,
  },
  {
    id: "4",
    name: "Checkmarx Process",
    description: `<h4>Setup Checkmarx in Local Environment and Fix issues</h4>
        <ul>
          <li>
            <details>
              <summary>Login to checkmarx under CX PORTAL found in the left tab</summary>
              <img class="mar-top-20" src="/images/checkmarx-extn.png" alt="Checkmarx Login" />
            </details>
          </li>
          <li>
            <details>
              <summary>Right click the project folder and select <code>Checkmarx: Scan Current Folder</code> to scan with checkmarx</summary>
              <img class="mar-top-20" src="/images/checkmarx-folder.png" alt="Checkmarx Folder" />
            </details>
          </li>
          <li>
            <details>
              <summary>In the popup, Select Yes for scan incremental and enter</summary>
              <img class="mar-top-20" src="/images/checkmarx-scan.png" alt="Checkmarx Scan Increment" />
            </details>
          </li>
          <li>
            <details>
              <summary>Next, Select No for scan private and enter</summary>
              <img class="mar-top-20" src="/images/checkmarx-private.png" alt="Checkmarx Scan Private" />
            </details>
          </li>
          <li>
            <details>
              <summary>Once the scan started, Go to <a class="link" target="_blank" href="https://www.checkmarx.ford.com/">Checkmarx portal</a> and select relevant project. now you can see the scan under <a class="link" target="_blank" href="https://www.checkmarx.ford.com/CxWebClient/UserQueue.aspx">Checkmarx queue</a></summary>
              <img class="mar-top-20" src="/images/checkmarx-queue.png" alt="Checkmarx Queue" />
            </details>
          </li>
          <li>
            <details>
              <summary>Once the scan is done, you can see the scan results <a class="link" target="_blank" href="https://www.checkmarx.ford.com/CxWebClient/projectscans.aspx?id=42038&ProjectState=true">here</a>. make sure your scan id to refer the exact scan report</summary>
              <img class="mar-top-20" src="/images/checkmarx-report.png" alt="Checkmarx Report" />
            </details>
          </li>
          <li>
            <details>
              <summary>Click on Create report icon present against each scan, a popup will open now select the necessary items and then click generate report.</summary>
              <img class="mar-top-20" src="/images/checkmarx-report-generate.png" alt="Checkmarx Report Generate" />
            </details>
          </li>
          <li>
            Repeat this steps until the issue got fixed.
          </li>
        </ul>
        <h5>Checkmarx Portal Link</h5>
        <p><a class="link" target="_blank" href="https://www.checkmarx.ford.com">https://www.checkmarx.ford.com</a></p>`,
  },
  {
    id: "5",
    name: "Connecting to GCP Platform",
    description: `Preparing Content!`,
  },
  {
    id: "6",
    name: "Common Challenges",
    description: `<ul>
          <li>
            <details>
              <summary>If the Bev Configuration file taking too much time to load or it is not loading properly in your local?</summary>
              <p class="mar-top-20">Got to AEM bundles => Search <code>Apache Sling Main Servlet</code> => Increase the <code>Number of calls per request</code> to 6000</p>
              <img class="mar-top-20" src="/images/bev-config.png" alt="Bev Config" />
            </details>
          </li>
          <li>
            <details>
              <summary>Jfrog issue fix in MacBook M1?</summary>
              <ul>
                <li>
                <p class="mar-top-20">if you are getting error like this</p>
                <img class="mar-top-20" src="/images/jfrog-issue1.png" alt="Jfrog issue" />
                <p class="mar-top-20">Replce the <code>.npmrc</code> file present in the root of the project with below</p>
                <p class="mar-top-20">
                  <code>_auth = aW1namVuaWRAZm9yZC5jb206Y21WbWRHdHVPakF4T2pFM016TTFPVEEzTnpRNlNVNVJXRzFyWldadlNWSnRWV0ZqWm5Kck1IWlZibXRMYjJkQw==</code><br>
                  <code>email = imgjenid@ford.com</code><br>
                  <code>always-auth = true</code>
                </p>
                </li>
                <li>
                <p class="mar-top-20">if you are getting error like this</p>
                <p class="mar-top-20">
                  <code>[ERROR] npm ERR! code E401</code><br>
                  <code>[ERROR] npm ERR! Unable to authenticate, need: BASIC realm="Sonatype Nexus Repository Manager"</code>
                </p>
                <p class="mar-top-20">
                  Replace the files <a class="link" target="_blank" download href="/assets/ford-aem-parent-1.3.3.pom">ford-aem-parent-1.3.3.pom</a> and <a class="link" target="_blank" download href="/assets/ford-aem-parent-1.3.3.pom.sha1">ford-aem-parent-1.3.3.pom.sha1</a> in the path <code>/.m2/repository/com/ford/aem/ford-aem-parent/1.3.3/</code>
                </p>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>File name too long error in GitHub Desktop application</summary>
              <p class="mar-top-20">open Git Bash => Enter this command <code>git config --global core.longpaths true</code></p>
            </details>
          </li>
        </ul>`,
  },
  {
    id: "7",
    name: "Configuration Setup",
    description: `<h4>SSL Configuration Setup in Local Environment</h4>
      <ul>
        <li><a class="link" href="https://experienceleague.adobe.com/docs/experience-manager-learn/foundation/security/use-the-ssl-wizard.html?lang=en" target="_blank">Download</a> the certificate file present at bottom of the page</li>
        <li>
          <details>
            <summary>Open hosts file</summary>
            <h5 class="mar-top-10">For Windows</h5>
            <p>Go to <code>C:&bsol;Windows&bsol;System32&bsol;drivers&bsol;etc</code> and open hosts file in Administrator mode.</p>
            <h5 class="mar-top-10">For Mac</h5>
            <p>Type the command in terminal and enter <code>sudo nano /private/etc/hosts</code></p>
          </details>
        </li>
        <li>Add an entry in the hosts file at last line <code>127.0.0.1 aemlocal.ford.com</code> and save it</li>
        <li>
          <details>
            <summary>Open <a class="link" href="http://aemlocal.ford.com:4502/libs/granite/security/content/sslConfig.html?item=configuration%2Fconfiguressl&_charset_=utf-8" target="_blank">SSL Link</a> in browser, and give <code>admin</code> for Keystore and trust store passwords.</summary>
            <img class="mar-top-10" src="/images/ssl-cert-password.png" alt="SSL Password">
          </details>
        </li>
        <li>
          <details>
            <summary>Upload Private and Certificate from the downladed file from step 1.</summary>
            <img class="mar-top-10" src="/images/ssl-cert.png" alt="SSL certifiacte upload">
          </details>
        </li>
        <li>
          <details>
            <summary>Give localhost in hostname and 8443 in port. click Done</summary>
            <img class="mar-top-10" src="/images/ssl-cert-port.png" alt="SSL certifiacte Port and Host">
          </details>
        </li>
        <li>
          Now you should able to open local link securely <a class="link" target="_blank" href="https://aemlocal.ford.com:8443">https://aemlocal.ford.com:8443</a>
        </li>
        <li>
          Keep this document for reference <a class="link" target="_blank" href="/assets/HTTPS_AEM_LOCAL.pptx">HTTPS_AEM_LOCAL</a>
        </li>
      </ul>`,
  },
  {
    id: "8",
    name: "Useful Links",
    description: `
        <table class="table-layout">
          <tr>
            <td>AEM Start page</td>
            <td><a class="link" target="_blank" href="https://aemlocal.ford.com:8443/aem/start.html">https://aemlocal.ford.com:8443/aem/start.html</a></td>
          </tr>
          <tr>
            <td>CRX DE</td>
            <td><a class="link" target="_blank" href="http://localhost:4502/crx/de/index.jsp">http://localhost:4502/crx/de/index.jsp</a></td>
          </tr>
          <tr>
            <td>Package Manager</td>
            <td><a class="link" target="_blank" href="http://localhost:4502/crx/packmgr/index.jsp">http://localhost:4502/crx/packmgr/index.jsp</a></td>
          </tr>
          <tr>
            <td>AEM Bundles</td>
            <td><a class="link" target="_blank" href="https://aemlocal.ford.com:8443/system/console/bundles">https://aemlocal.ford.com:8443/system/console/bundles</a></td>
          </tr>
          <tr>
            <td>AEM Siteadmin</td>
            <td><a class="link" target="_blank" href="http://localhost:4502/siteadmin">http://localhost:4502/siteadmin</a></td>
          </tr>
          <tr>
            <td>VDM AU</td>
            <td><a class="link" target="_blank" href="https://wwwqa.brandauthoraplb.ford.com/content/newVDM/nameplate.html?wcmmode=disabled&marketMakeID=25">https://wwwqa.brandauthoraplb.ford.com/content/newVDM/nameplate.html?wcmmode=disabled&marketMakeID=25</a></td>
          </tr>
          <tr>
            <td>Rally</td>
            <td><a class="link" target="_blank" href="https://rally1.rallydev.com/">https://rally1.rallydev.com/</a></td>
          </tr>
          <tr>
            <td>ALM</td>
            <td><a class="link" target="_blank" href="http://www.almglobal.ford.com/qcbin/webrunner/">http://www.almglobal.ford.com/qcbin/webrunner/</a></td>
          </tr>
          <tr>
            <td>Ecomm page AU Local</td>
            <td><a class="link" target="_blank" href="https://aemlocal.ford.com:8443/content/ecomm-img/au/en_au/pre-order/build-and-price.html?wcmmode=disabled#/model">https://aemlocal.ford.com:8443/content/ecomm-img/au/en_au/pre-order/build-and-price.html?wcmmode=disabled#/model</a></td>
          </tr>
          <tr>
            <td>Home Page ZA Local</td>
            <td><a class="link" target="_blank" href="https://localhost.ford.com:4502/content/ford/za/en_za/home.html?wcmmode=disabled">https://localhost.ford.com:4502/content/ford/za/en_za/home.html?wcmmode=disabled</a></td>
          </tr>
          <tr>
            <td>Home Page ZA Dev Author</td>
            <td><a class="link" target="_blank" href="https://wwwdev.brandauthoraplb.ford.com/content/ford/za/en_za/home.html?wcmmode=disabled">https://wwwdev.brandauthoraplb.ford.com/content/ford/za/en_za/home.html?wcmmode=disabled</a></td>
          </tr>
          <tr>
            <td>Home Page ZA Dev Publisher</td>
            <td><a class="link" target="_blank" href="https://wwwdev.brandaplb.ford.com/content/ford/za/en_za/home.html">https://wwwdev.brandaplb.ford.com/content/ford/za/en_za/home.html</a></td>
          </tr>
          <tr>
            <td>Home Page ZA Dev Akamai</td>
            <td><a class="link" target="_blank" href="https://akamai.wwwdev.brandap.ford.com/content/ford/za/en_za/home.html">https://akamai.wwwdev.brandap.ford.com/content/ford/za/en_za/home.html</a></td>
          </tr>
          <tr>
            <td>Home Page ZA Dev2 Author</td>
            <td><a class="link" target="_blank" href="https://wwwdev2.brandauthoraplb.ford.com/content/ford/za/en_za/home.html?wcmmode=disabled">https://wwwdev2.brandauthoraplb.ford.com/content/ford/za/en_za/home.html?wcmmode=disabled</a></td>
          </tr>
          <tr>
            <td>Home Page ZA Dev2 Publisher</td>
            <td><a class="link" target="_blank" href="https://wwwdev2.brandaplb.ford.com/content/ford/za/en_za/home.html">https://wwwdev2.brandaplb.ford.com/content/ford/za/en_za/home.html</a></td>
          </tr>
          <tr>
            <td>Home Page ZA Dev2 Akamai</td>
            <td><a class="link" target="_blank" href="https://wwwdev2.akamai.brandaplb.ford.com/content/ford/za/en_za/home.html">https://wwwdev2.akamai.brandaplb.ford.com/content/ford/za/en_za/home.html</a></td>
          </tr>
          <tr>
            <td>Home Page ZA QA Author</td>
            <td><a class="link" target="_blank" href="https://wwwqa.brandauthoraplb.ford.com/content/ford/za/en_za/home.html?wcmmode=disabled">https://wwwqa.brandauthoraplb.ford.com/content/ford/za/en_za/home.html?wcmmode=disabled</a></td>
          </tr>
          <tr>
            <td>Home Page ZA QA Publisher</td>
            <td><a class="link" target="_blank" href="https://wwwqa.brandaplb.ford.com/content/ford/za/en_za/home.html">https://wwwqa.brandaplb.ford.com/content/ford/za/en_za/home.html</a></td>
          </tr>
          <tr>
            <td>Home Page ZA QA Akamai</td>
            <td><a class="link" target="_blank" href="https://akamai.wwwqa.brandap.ford.com/content/ford/za/en_za/home.html">https://akamai.wwwqa.brandap.ford.com/content/ford/za/en_za/home.html</a></td>
          </tr>
          <tr>
            <td>Home Page ZA PERF Author</td>
            <td><a class="link" target="_blank" href="https://wwwperf.brandauthoraplb.ford.com/content/ford/za/en_za/home.html?wcmmode=disabled">https://wwwperf.brandauthoraplb.ford.com/content/ford/za/en_za/home.html?wcmmode=disabled</a></td>
          </tr>
          <tr>
            <td>Home Page ZA PERF Publisher</td>
            <td><a class="link" target="_blank" href="https://wwwperf.brandaplb.ford.com/content/ford/za/en_za/home.html">https://wwwperf.brandaplb.ford.com/content/ford/za/en_za/home.html</a></td>
          </tr>
          <tr>
            <td>Home Page ZA PERF Akamai</td>
            <td><a class="link" target="_blank" href="https://wwwperf.akamai.brandaplb.ford.com/content/ford/za/en_za/home.html">https://wwwperf.akamai.brandaplb.ford.com/content/ford/za/en_za/home.html</a></td>
          </tr>
          <tr>
            <td>Home Page ZA Preview</td>
            <td><a class="link" target="_blank" href="https://www.brandappreviewlb.ford.com/content/ford/za/en_za/home.html">https://www.brandappreviewlb.ford.com/content/ford/za/en_za/home.html</a></td>
          </tr>
          <tr>
            <td>Dispatcher QA</td>
            <td><a class="link" target="_blank" href="https://wwwqa.brandauthoraplb.ford.com/etc/acs-commons/dispatcher-flush/Ford/DispatcherFlush.html/flush/true">https://wwwqa.brandauthoraplb.ford.com/etc/acs-commons/dispatcher-flush/Ford/DispatcherFlush.html/flush/true</a></td>
          </tr>
        </table>
        <h4 class="mar-top-30">Dispatcher Paths</h4>
        <table class="table-layout">
          <tr>
            <td>Ford AEM</td>
            <td>/etc/designs/guxfoap</td>
          </tr>
          <tr>
            <td>Ford TouchUI</td>
            <td>/etc/designs/guxfoap-touchui</td>
          </tr>
          <tr>
            <td>Ecomimg NGC</td>
            <td>/etc/designs/ngc</td>
          </tr>
          <tr>
            <td>Ecomimg Accelerator</td>
            <td>/etc/designs/guxacc</td>
          </tr>
          <tr>
            <td>Ecomimg AEM</td>
            <td>/etc/designs/guxfoe</td>
          </tr>
          <tr>
            <td>Ecomimg Bev Reservation</td>
            <td>/etc/designs/bev</td>
          </tr>
          <tr>
            <td>Ecomimg Acc Product Data</td>
            <td>/etc/designs/accproductdata</td>
          </tr>
          <tr>
            <td>IMG Markets ECOMM Pages Content Path</td>
            <td>/content/ecomm-img/au/en_au<br>
                /content/ecomm-img/nz/en_nz<br>
                /content/ecomm-img/th/th_th<br>
                /content/ecomm-img/th/en_th<br>
                /content/ecomm-img/vn/vi_vn<br>
                /content/ecomm-img/za/en_za<br>
                /content/ecomm-img/ph/en_ph</td>
          </tr>
        </table>
      `,
  },
];
