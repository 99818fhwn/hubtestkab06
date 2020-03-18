#Kabanero Test

Please see https://ibm-cp-applications.apps.poc.k8s.lossburg.arburg.com to get started and learn more about IBM Cloud Pak for Applications 4.1.0.

The pipelines dashboard is available at: https://tekton-dashboard-tekton-pipelines.apps.poc.k8s.lossburg.arburg.com

The IBM Application Navigator UI is available at: https://kappnav-ui-service-kappnav.apps.poc.k8s.lossburg.arburg.com



#Wichtig:

appsody stacks sollten nicht im root directory (.git) verwendet werden. 
Bei appsody deploy entsteht sonst ein copy fehler und das deployment wird gestoppt


$ curl -L --ssl-no-revoke https://github.com/gcharters/kabanero-dev-getting-started/releases/download/0.0.5/workshop-setup.sh | bash -s -- -p -l nodejs
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   608  100   608    0     0    608      0  0:00:01 --:--:--  0:00:01  1948
100 15549  100 15549    0     0  15549      0  0:00:01 --:--:--  0:00:01 15549

INFO: Workshop preparation starting...


INFO: Starting prerequisite checking...

INFO: appsody CLI installed: appsody 0.5.9
INFO: appsody CLI version [0.5.9] meets minimum requirements.
INFO: git CLI installed: git version 2.25.1.windows.1
INFO: git CLI version [2.25.1.windows.1] meets minimum requirements.
INFO: docker CLI installed
INFO: docker daemon is running
INFO: docker version [19.03.8] meets minimum requirements.
INFO: kubectl CLI installed: Client Version: v1.15.5 Server Version: v1.15.5
INFO: kubectl context for workshop is correct: docker-desktop
INFO: kubernetes cluster is available.
Kubernetes master is running at https://kubernetes.docker.internal:6443
KubeDNS is running at https://kubernetes.docker.internal:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
INFO: kubectl client version [v1.15.5] meets minimum requirements.
INFO: All prerequisites verified.

INFO: Workshop preparation ready at /cygdrive/c/Users/schul287/workspace/kabanero-workshop

INFO: Execute the following line in Windows Command Prompt to configure environment variables referenced in workshop instructions:
C:\Users\schul287\workspace\kabanero-workshop\env.bat

INFO: Execute the following line in Cygwin shells to configure environment variables referenced in workshop instructions:
eval $(cat /cygdrive/c/Users/schul287/workspace/kabanero-workshop/env.sh)


Result:
set IMAGE_REGISTRY_ORG=kabanero

set CODEWIND_INDEX=false

set WORKSHOP_DIR=C:\Users\schul287\workspace\kabanero-workshop

set workshop_dir=C:\Users\schul287\workspace\kabanero-workshop

set workshop_url_dir=C:/Users/schul287/workspace/kabanero-workshop