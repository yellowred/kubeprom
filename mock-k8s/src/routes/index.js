import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/xml');
  next();
});

const k8sStub = {
  kind: 'PodList',
  apiVersion: 'v1',
  metadata: {
    selfLink: '/api/v1/namespaces/kube-proj/pods',
    resourceVersion: '45588191',
  },
  items: [
    {
      metadata: {
        name: 'kong-11-a7jtx',
        generateName: 'kong-11-',
        namespace: 'kube-proj',
        selfLink: '/api/v1/namespaces/kube-proj/pods/kong-11-a7jtx',
        uid: '4427bf2c-86de-11e7-bf0d-005056957fc1',
        resourceVersion: '45329099',
        creationTimestamp: '2017-08-22T02:04:44Z',
        labels: {
          deployment: 'kong-11',
          deploymentconfig: 'kong',
          name: 'kong',
        },
        annotations: {
          'kubernetes.io/created-by': '{"kind":"SerializedReference","apiVersion":"v1","reference":{"kind":"ReplicationController","namespace":"kube-proj","name":"kong-11","uid":"81105f0d-75c1-11e7-85b1-005056957fc1","apiVersion":"v1","resourceVersion":"39768904"}}\n',
          'openshift.io/deployment-config.latest-version': '11',
          'openshift.io/deployment-config.name': 'kong',
          'openshift.io/deployment.name': 'kong-11',
          'openshift.io/scc': 'restricted',
        },
      },
      spec: {
        volumes: [
          {
            name: 'secret-digital-account-api-keys',
            secret: {
              secretName: 'digital-account-api-keys',
            },
          },
          {
            name: 'default-token-8y7v7',
            secret: {
              secretName: 'default-token-8y7v7',
            },
          },
        ],
        containers: [
          {
            name: 'kong',
            image: '172.30.242.237:5000/kube-proj/kong@sha256:6538aea8c491e928b68279faf33d4a6c2ed37f81fbd81109b3594a554814625a',
            ports: [
              {
                containerPort: 7373,
                protocol: 'TCP',
              },
              {
                containerPort: 7946,
                protocol: 'TCP',
              },
              {
                containerPort: 7946,
                protocol: 'UDP',
              },
              {
                containerPort: 8000,
                protocol: 'TCP',
              },
              {
                containerPort: 8001,
                protocol: 'TCP',
              },
              {
                containerPort: 8443,
                protocol: 'TCP',
              },
            ],
            env: [
              {
                name: 'NODE_ENV',
                value: 'qa',
              },
              {
                name: 'KONG_DATABASE_TYPE',
                value: 'postgres',
              },
              {
                name: 'KONG_PG_HOST',
                value: '$(KONG_DATABASE_SERVICE_HOST)',
              },
              {
                name: 'KONG_PG_USER',
                value: 'kong',
              },
              {
                name: 'KONG_PG_PASSWORD',
                value: 'co%%ffeemu%%gwa%%terea%%rbuds',
              },
              {
                name: 'KONG_DATABASE_V2_SERVICE_HOST',
                value: '$(KONG_DATABASE_SERVICE_HOST)',
              },
              {
                name: 'KONG_DATABASE_V2_SERVICE_PORT',
                value: '$(KONG_DATABASE_SERVICE_PORT)',
              },
              {
                name: 'NO_PROXY',
                value: '127.0.0.1, localhost, $(KONG_DATABASE_SERVICE_HOST), logging-es.logging.svc.cluster.local',
              },
            ],
            resources: {},
            volumeMounts: [
              {
                name: 'secret-digital-account-api-keys',
                readOnly: true,
                mountPath: '/etc/secrets-api-keys',
              },
              {
                name: 'default-token-8y7v7',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            imagePullPolicy: 'IfNotPresent',
            securityContext: {
              capabilities: {
                drop: [
                  'KILL',
                  'MKNOD',
                  'SETGID',
                  'SETUID',
                  'SYS_CHROOT',
                ],
              },
              privileged: false,
              seLinuxOptions: {
                level: 's0:c18,c2',
              },
              runAsUser: 1000310000,
            },
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        nodeSelector: {
          zone: 'preprod',
        },
        host: 'laposn01.applications.services.axa-tech.intraxa',
        serviceAccountName: 'default',
        serviceAccount: 'default',
        nodeName: 'laposn01.applications.services.axa-tech.intraxa',
        securityContext: {
          seLinuxOptions: {
            level: 's0:c18,c2',
          },
          fsGroup: 1000310000,
        },
        imagePullSecrets: [
          {
            name: 'default-dockercfg-rjnx4',
          },
        ],
      },
      status: {
        phase: 'Running',
        conditions: [
          {
            type: 'Ready',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2017-08-28T13:00:52Z',
          },
        ],
        hostIP: '10.144.83.141',
        podIP: '10.1.2.39',
        startTime: '2017-08-22T02:04:44Z',
        containerStatuses: [
          {
            name: 'kong',
            state: {
              running: {
                startedAt: '2017-08-22T02:07:54Z',
              },
            },
            lastState: {},
            ready: true,
            restartCount: 0,
            image: '172.30.242.237:5000/kube-proj/kong@sha256:6538aea8c491e928b68279faf33d4a6c2ed37f81fbd81109b3594a554814625a',
            imageID: 'docker://993fe825d1ead6d788e46a3b5feef123951e1dfdc912084a156791fa0847fb5d',
            containerID: 'docker://04f029ecd9ecbf338b72a82fd4f8847b036328f07cb46535cd9e9e2966ec2e0c',
          },
        ],
      },
    },
    {
      metadata: {
        name: 'kong-database-3-f3qmb',
        generateName: 'kong-database-3-',
        namespace: 'kube-proj',
        selfLink: '/api/v1/namespaces/kube-proj/pods/kong-database-3-f3qmb',
        uid: '44415af9-86de-11e7-bf0d-005056957fc1',
        resourceVersion: '45329095',
        creationTimestamp: '2017-08-22T02:04:44Z',
        labels: {
          app: 'kong-database',
          deployment: 'kong-database-3',
          deploymentconfig: 'kong-database',
        },
        annotations: {
          'kubernetes.io/created-by': '{"kind":"SerializedReference","apiVersion":"v1","reference":{"kind":"ReplicationController","namespace":"kube-proj","name":"kong-database-3","uid":"be8a5c8a-4031-11e7-908d-005056957fc1","apiVersion":"v1","resourceVersion":"39768649"}}\n',
          'openshift.io/container.kong-database.image.entrypoint': '["container-entrypoint","run-postgresql"]',
          'openshift.io/deployment-config.latest-version': '3',
          'openshift.io/deployment-config.name': 'kong-database',
          'openshift.io/deployment.name': 'kong-database-3',
          'openshift.io/generated-by': 'OpenShiftNewApp',
          'openshift.io/scc': 'restricted',
        },
      },
      spec: {
        volumes: [
          {
            name: 'kong-database-volume-1',
            emptyDir: {},
          },
          {
            name: 'default-token-8y7v7',
            secret: {
              secretName: 'default-token-8y7v7',
            },
          },
        ],
        containers: [
          {
            name: 'kong-database',
            image: 'registry.access.redhat.com/rhscl/postgresql-94-rhel7@sha256:041485953fe0383ed58aad22a8eaa674358629009bbed6478fdd13567639bf57',
            ports: [
              {
                containerPort: 5432,
                protocol: 'TCP',
              },
            ],
            env: [
              {
                name: 'POSTGRESQL_ADMIN_PASSWORD',
                value: 'ju%%mperip%%adgl%%asses',
              },
              {
                name: 'POSTGRESQL_MAX_CONNECTIONS',
                value: '500',
              },
              {
                name: 'POSTGRESQL_DATABASE',
                value: 'kong',
              },
              {
                name: 'POSTGRESQL_USER',
                value: 'kong',
              },
              {
                name: 'POSTGRESQL_PASSWORD',
                value: 'co%%ffeemu%%gwa%%terea%%rbuds',
              },
            ],
            resources: {},
            volumeMounts: [
              {
                name: 'kong-database-volume-1',
                mountPath: '/var/lib/pgsql/data',
              },
              {
                name: 'default-token-8y7v7',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            imagePullPolicy: 'Always',
            securityContext: {
              capabilities: {
                drop: [
                  'KILL',
                  'MKNOD',
                  'SETGID',
                  'SETUID',
                  'SYS_CHROOT',
                ],
              },
              privileged: false,
              seLinuxOptions: {
                level: 's0:c18,c2',
              },
              runAsUser: 1000310000,
            },
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        nodeSelector: {
          zone: 'preprod',
        },
        host: 'laposn01.applications.services.axa-tech.intraxa',
        serviceAccountName: 'default',
        serviceAccount: 'default',
        nodeName: 'laposn01.applications.services.axa-tech.intraxa',
        securityContext: {
          seLinuxOptions: {
            level: 's0:c18,c2',
          },
          fsGroup: 1000310000,
        },
        imagePullSecrets: [
          {
            name: 'default-dockercfg-rjnx4',
          },
        ],
      },
      status: {
        phase: 'Running',
        conditions: [
          {
            type: 'Ready',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2017-08-28T13:00:25Z',
          },
        ],
        hostIP: '10.144.83.141',
        podIP: '10.1.2.38',
        startTime: '2017-08-22T02:04:44Z',
        containerStatuses: [
          {
            name: 'kong-database',
            state: {
              running: {
                startedAt: '2017-08-22T02:18:52Z',
              },
            },
            lastState: {},
            ready: true,
            restartCount: 0,
            image: 'registry.access.redhat.com/rhscl/postgresql-94-rhel7@sha256:041485953fe0383ed58aad22a8eaa674358629009bbed6478fdd13567639bf57',
            imageID: 'docker://a2d43dbb0bb540342810b03a7588070dcb263f4a6b2ab658633384d73c353c93',
            containerID: 'docker://8f914e447bc9ce61951f6d20f574773be4a5f8da68413b1df46c2dca7df65546',
          },
        ],
      },
    },
    {
      metadata: {
        name: 'mongodb-4-zlice',
        generateName: 'mongodb-4-',
        namespace: 'kube-proj',
        selfLink: '/api/v1/namespaces/kube-proj/pods/mongodb-4-zlice',
        uid: '4461a244-86de-11e7-bf0d-005056957fc1',
        resourceVersion: '45329123',
        creationTimestamp: '2017-08-22T02:04:44Z',
        labels: {
          app: 'mongodb',
          deployment: 'mongodb-4',
          deploymentconfig: 'mongodb',
        },
        annotations: {
          'kubernetes.io/created-by': '{"kind":"SerializedReference","apiVersion":"v1","reference":{"kind":"ReplicationController","namespace":"kube-proj","name":"mongodb-4","uid":"ce89154c-4031-11e7-908d-005056957fc1","apiVersion":"v1","resourceVersion":"39898102"}}\n',
          'openshift.io/container.mongodb.image.entrypoint': '["/entrypoint.sh","mongod"]',
          'openshift.io/deployment-config.latest-version': '4',
          'openshift.io/deployment-config.name': 'mongodb',
          'openshift.io/deployment.name': 'mongodb-4',
          'openshift.io/scc': 'restricted',
        },
      },
      spec: {
        volumes: [
          {
            name: 'mongodb-volume-1',
            emptyDir: {},
          },
          {
            name: 'mongodb-volume-2',
            emptyDir: {},
          },
          {
            name: 'default-token-8y7v7',
            secret: {
              secretName: 'default-token-8y7v7',
            },
          },
        ],
        containers: [
          {
            name: 'mongodb',
            image: 'docker.io/library/mongo:3.2.10',
            ports: [
              {
                containerPort: 27017,
                protocol: 'TCP',
              },
            ],
            env: [
              {
                name: 'http_proxy',
                value: 'http://10.144.76.10:8080',
              },
              {
                name: 'https_proxy',
                value: 'http://10.144.76.10:8080',
              },
            ],
            resources: {},
            volumeMounts: [
              {
                name: 'mongodb-volume-1',
                mountPath: '/data/configdb',
              },
              {
                name: 'mongodb-volume-2',
                mountPath: '/data/db',
              },
              {
                name: 'default-token-8y7v7',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            imagePullPolicy: 'IfNotPresent',
            securityContext: {
              capabilities: {
                drop: [
                  'KILL',
                  'MKNOD',
                  'SETGID',
                  'SETUID',
                  'SYS_CHROOT',
                ],
              },
              privileged: false,
              seLinuxOptions: {
                level: 's0:c18,c2',
              },
              runAsUser: 1000310000,
            },
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        nodeSelector: {
          zone: 'preprod',
        },
        host: 'laposn01.applications.services.axa-tech.intraxa',
        serviceAccountName: 'default',
        serviceAccount: 'default',
        nodeName: 'laposn01.applications.services.axa-tech.intraxa',
        securityContext: {
          seLinuxOptions: {
            level: 's0:c18,c2',
          },
          fsGroup: 1000310000,
        },
        imagePullSecrets: [
          {
            name: 'default-dockercfg-rjnx4',
          },
        ],
      },
      status: {
        phase: 'Running',
        conditions: [
          {
            type: 'Ready',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2017-08-28T13:00:24Z',
          },
        ],
        hostIP: '10.144.83.141',
        podIP: '10.1.2.41',
        startTime: '2017-08-22T02:04:45Z',
        containerStatuses: [
          {
            name: 'mongodb',
            state: {
              running: {
                startedAt: '2017-08-22T02:14:25Z',
              },
            },
            lastState: {},
            ready: true,
            restartCount: 0,
            image: 'docker.io/library/mongo:3.2.10',
            imageID: 'docker://3051fc9a7bd4c6331f73c78de1bfdc2c7b547cfc4ca3559a85e9ab00b710a2f7',
            containerID: 'docker://7ae1ba445295174013c1b674d06a52139207ef6c36528d7c78e04cbd93e66b0e',
          },
        ],
      },
    },
    {
      metadata: {
        name: 'kube-proj-67-9jsdf',
        generateName: 'kube-proj-67-',
        namespace: 'kube-proj',
        selfLink: '/api/v1/namespaces/kube-proj/pods/kube-proj-67-9jsdf',
        uid: '447300e5-86de-11e7-bf0d-005056957fc1',
        resourceVersion: '45329108',
        creationTimestamp: '2017-08-22T02:04:44Z',
        labels: {
          app: 'kube-proj',
          deployment: 'kube-proj-67',
          deploymentconfig: 'kube-proj',
        },
        annotations: {
          'kubernetes.io/created-by': '{"kind":"SerializedReference","apiVersion":"v1","reference":{"kind":"ReplicationController","namespace":"kube-proj","name":"kube-proj-67","uid":"f227e8dd-75cb-11e7-85b1-005056957fc1","apiVersion":"v1","resourceVersion":"39898121"}}\n',
          'openshift.io/deployment-config.latest-version': '67',
          'openshift.io/deployment-config.name': 'kube-proj',
          'openshift.io/deployment.name': 'kube-proj-67',
          'openshift.io/scc': 'restricted',
        },
      },
      spec: {
        volumes: [
          {
            name: 'secret-volume',
            secret: {
              secretName: 'api-factory-secrets',
            },
          },
          {
            name: 'default-token-8y7v7',
            secret: {
              secretName: 'default-token-8y7v7',
            },
          },
        ],
        containers: [
          {
            name: 'kube-proj',
            image: '172.30.242.237:5000/kube-proj/kube-proj@sha256:112bea9fb0fe0ad0c77a9df0e9ebdac5a6f68792d1c4a7dc2856292187853edd',
            ports: [
              {
                containerPort: 8080,
                protocol: 'TCP',
              },
            ],
            env: [
              {
                name: 'NODE_ENV',
                value: 'qa',
              },
              {
                name: 'SECRET_PATH',
                value: '/etc/secrets/secrets.json',
              },
              {
                name: 'NODE_TLS_REJECT_UNAUTHORIZED',
                value: '0',
              },
              {
                name: 'ENFORCE_PASSWORD_POLICY',
                value: 'true',
              }
            ],
            resources: {},
            volumeMounts: [
              {
                name: 'secret-volume',
                readOnly: true,
                mountPath: '/etc/secrets',
              },
              {
                name: 'default-token-8y7v7',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            imagePullPolicy: 'Always',
            securityContext: {
              capabilities: {
                drop: [
                  'KILL',
                  'MKNOD',
                  'SETGID',
                  'SETUID',
                  'SYS_CHROOT',
                ],
              },
              privileged: false,
              seLinuxOptions: {
                level: 's0:c18,c2',
              },
              runAsUser: 1000310000,
            },
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        nodeSelector: {
          zone: 'preprod',
        },
        serviceAccountName: 'default',
        serviceAccount: 'default',
        securityContext: {
          seLinuxOptions: {
            level: 's0:c18,c2',
          },
          fsGroup: 1000310000,
        },
        imagePullSecrets: [
          {
            name: 'default-dockercfg-rjnx4',
          },
        ],
      },
      status: {
        phase: 'Running',
        conditions: [
          {
            type: 'Ready',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2017-08-28T13:00:47Z',
          },
        ],
        hostIP: '10.144.83.141',
        podIP: '192.168.33.100',
        startTime: '2017-08-22T02:04:45Z',
        containerStatuses: [
          {
            name: 'kube-proj',
            state: {
              running: {
                startedAt: '2017-08-22T02:33:32Z',
              },
            },
            lastState: {},
            ready: true,
            restartCount: 0
          },
        ],
      },
    },
    {
      metadata: {
        name: 'kube-proj-67-y7lmi',
        generateName: 'kube-proj-67-',
        namespace: 'kube-proj',
        selfLink: '/api/v1/namespaces/kube-proj/pods/kube-proj-67-y7lmi',
        uid: '41c11ccf-91da-11e7-bf0d-005056957fc1',
        resourceVersion: '45587669',
        creationTimestamp: '2017-09-05T01:33:45Z',
        labels: {
          app: 'kube-proj',
          deployment: 'kube-proj-67',
          deploymentconfig: 'kube-proj',
        },
        annotations: {
          'kubernetes.io/created-by': '{"kind":"SerializedReference","apiVersion":"v1","reference":{"kind":"ReplicationController","namespace":"kube-proj","name":"kube-proj-67","uid":"f227e8dd-75cb-11e7-85b1-005056957fc1","apiVersion":"v1","resourceVersion":"45587592"}}\n',
          'openshift.io/deployment-config.latest-version': '67',
          'openshift.io/deployment-config.name': 'kube-proj',
          'openshift.io/deployment.name': 'kube-proj-67',
          'openshift.io/scc': 'restricted',
        },
      },
      spec: {
        volumes: [
          {
            name: 'secret-volume',
            secret: {
              secretName: 'kube-proj-secrets',
            },
          },
          {
            name: 'default-token-8y7v7',
            secret: {
              secretName: 'default-token-8y7v7',
            },
          },
        ],
        containers: [
          {
            name: 'kube-proj',
            image: '172.30.242.237:5000/kube-proj/kube-proj@sha256:112bea9fb0fe0ad0c77a9df0e9ebdac5a6f68792d1c4a7dc2856292187853edd',
            ports: [
              {
                containerPort: 8080,
                protocol: 'TCP',
              },
            ],
            env: [
              {
                name: 'NODE_ENV',
                value: 'qa',
              },
              {
                name: 'SECRET_PATH',
                value: '/etc/secrets/secrets.json',
              },
              {
                name: 'NODE_TLS_REJECT_UNAUTHORIZED',
                value: '0',
              },
            ],
            resources: {},
            volumeMounts: [
              {
                name: 'secret-volume',
                readOnly: true,
                mountPath: '/etc/secrets',
              },
              {
                name: 'default-token-8y7v7',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            imagePullPolicy: 'Always',
            securityContext: {
              capabilities: {
                drop: [
                  'KILL',
                  'MKNOD',
                  'SETGID',
                  'SETUID',
                  'SYS_CHROOT',
                ],
              },
              privileged: false,
              seLinuxOptions: {
                level: 's0:c18,c2',
              },
              runAsUser: 1000310000,
            },
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        nodeSelector: {
          zone: 'preprod',
        },
        serviceAccountName: 'default',
        serviceAccount: 'default',
        securityContext: {
          seLinuxOptions: {
            level: 's0:c18,c2',
          },
          fsGroup: 1000310000,
        },
        imagePullSecrets: [
          {
            name: 'default-dockercfg-rjnx4',
          },
        ],
      },
      status: {
        phase: 'Running',
        conditions: [
          {
            type: 'Ready',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2017-09-05T01:35:21Z',
          },
        ],
        hostIP: '10.144.83.142',
        podIP: '192.168.77.100',
        startTime: '2017-09-05T01:33:45Z',
        containerStatuses: [
          {
            name: 'kube-proj',
            state: {
              running: {
                startedAt: '2017-09-05T01:35:21Z',
              },
            },
            lastState: {},
            ready: true,
            restartCount: 0,
            image: '172.30.242.237:5000/kube-proj/kube-proj@sha256:112bea9fb0fe0ad0c77a9df0e9ebdac5a6f68792d1c4a7dc2856292187853edd',
            imageID: 'docker://0394ba8c867c0b975a1a688eb810439bb675ac53d4c653f4f994cd98d459fa7f',
            containerID: 'docker://fec0285f29e30e466cd506747d96d57893200a420cfad34a94be529437d4dc46',
          },
        ],
      },
    },
    {
      metadata: {
        name: 'ods-api-102-uxy2w',
        generateName: 'ods-api-102-',
        namespace: 'kube-proj',
        selfLink: '/api/v1/namespaces/kube-proj/pods/ods-api-102-uxy2w',
        uid: '44db743c-86de-11e7-bf0d-005056957fc1',
        resourceVersion: '45329132',
        creationTimestamp: '2017-08-22T02:04:45Z',
        labels: {
          app: 'ods-api',
          deployment: 'ods-api-102',
          deploymentconfig: 'ods-api',
        },
        annotations: {
          'kubernetes.io/created-by': '{"kind":"SerializedReference","apiVersion":"v1","reference":{"kind":"ReplicationController","namespace":"kube-proj","name":"ods-api-102","uid":"5b13f8f9-6cf0-11e7-a1c8-005056957fc1","apiVersion":"v1","resourceVersion":"39898147"}}\n',
          'openshift.io/deployment-config.latest-version': '102',
          'openshift.io/deployment-config.name': 'ods-api',
          'openshift.io/deployment.name': 'ods-api-102',
          'openshift.io/scc': 'restricted',
        },
      },
      spec: {
        volumes: [
          {
            name: 'tnsadmin-volume',
            secret: {
              secretName: 'tnsadmin',
            },
          },
          {
            name: 'odssecrets-volume',
            secret: {
              secretName: 'odssecrets',
            },
          },
          {
            name: 'default-token-8y7v7',
            secret: {
              secretName: 'default-token-8y7v7',
            },
          },
        ],
        containers: [
          {
            name: 'ods-api',
            image: '172.30.242.237:5000/kube-proj/ods-api@sha256:06a67cba03959d239ca030f3b95fb560eb5a65d12cfc52b77cf6f957439dfe66',
            ports: [
              {
                containerPort: 8080,
                protocol: 'TCP',
              },
            ],
            env: [
              {
                name: 'NODEJS_VERSION',
                value: '6.2.2',
              },
              {
                name: 'http_proxy',
                value: 'http://10.144.76.10:8080',
              },
              {
                name: 'https_proxy',
                value: 'http://10.144.76.10:8080',
              }
            ],
            resources: {},
            volumeMounts: [
              {
                name: 'tnsadmin-volume',
                readOnly: true,
                mountPath: '/etc/tnsadmin',
              },
              {
                name: 'odssecrets-volume',
                readOnly: true,
                mountPath: '/etc/secrets',
              },
              {
                name: 'default-token-8y7v7',
                readOnly: true,
                mountPath: '/var/run/secrets/kubernetes.io/serviceaccount',
              },
            ],
            terminationMessagePath: '/dev/termination-log',
            imagePullPolicy: 'IfNotPresent',
            securityContext: {
              capabilities: {
                drop: [
                  'KILL',
                  'MKNOD',
                  'SETGID',
                  'SETUID',
                  'SYS_CHROOT',
                ],
              },
              privileged: false,
              seLinuxOptions: {
                level: 's0:c18,c2',
              },
              runAsUser: 1000310000,
            },
          },
        ],
        restartPolicy: 'Always',
        terminationGracePeriodSeconds: 30,
        dnsPolicy: 'ClusterFirst',
        nodeSelector: {
          zone: 'preprod',
        },
        serviceAccountName: 'default',
        serviceAccount: 'default',
        securityContext: {
          seLinuxOptions: {
            level: 's0:c18,c2',
          },
          fsGroup: 1000310000,
        },
        imagePullSecrets: [
          {
            name: 'default-dockercfg-rjnx4',
          },
        ],
      },
      status: {
        phase: 'Running',
        conditions: [
          {
            type: 'Ready',
            status: 'True',
            lastProbeTime: null,
            lastTransitionTime: '2017-08-28T13:00:23Z',
          },
        ],
        hostIP: '10.144.83.141',
        podIP: '10.1.2.10',
        startTime: '2017-08-22T02:04:46Z',
        containerStatuses: [
          {
            name: 'ods-api',
            state: {
              running: {
                startedAt: '2017-08-22T02:07:45Z',
              },
            },
            lastState: {},
            ready: true,
            restartCount: 0,
            image: '172.30.242.237:5000/kube-proj/ods-api@sha256:06a67cba03959d239ca030f3b95fb560eb5a65d12cfc52b77cf6f957439dfe66',
            imageID: 'docker://a99c616e5902939361dce654fff9da7498a481c57e1357ffea4f04c566faca4a',
            containerID: 'docker://a3dd796d5db82d66725be067da885a2da54f12b4bedb1034724562eaba688d34',
          },
        ],
      },
    },
  ],
};

const promStub =
`
# HELP loopback_http_requests_total Total Loopback HTTP requests
# TYPE loopback_http_requests_total counter
loopback_http_requests_total{url="/api/v1/registrations/create",method="POST",status="200"} 61

# HELP http_request_duration_ms Duration of HTTP requests in ms
# TYPE http_request_duration_ms histogram
http_request_duration_ms_bucket{le="0.1",route="/api/v1/registrations/tokens/generate"} 0

# HELP process_cpu_user_seconds_total Total user CPU time spent in seconds.
# TYPE process_cpu_user_seconds_total counter
process_cpu_user_seconds_total 125.96365100000024 1504002611981

# HELP process_cpu_system_seconds_total Total system CPU time spent in seconds.
# TYPE process_cpu_system_seconds_total counter
process_cpu_system_seconds_total 37.87939800000046 1504002611981

# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 163.84304900000026 1504002611981

# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1503369215

# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 92080000 1504002611982

# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 1286888000 1504002611982

# HELP process_heap_bytes Process heap size in bytes.
# TYPE process_heap_bytes gauge
process_heap_bytes 1238348000 1504002611982

# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 14 1504002611982

# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 1614174

# HELP nodejs_eventloop_lag_seconds Lag of event loop in seconds.
# TYPE nodejs_eventloop_lag_seconds gauge
nodejs_eventloop_lag_seconds 0.000509873 1504002611982

# HELP nodejs_active_handles_total Number of active handles.
# TYPE nodejs_active_handles_total gauge
nodejs_active_handles_total 5 1504002611981

# HELP nodejs_active_requests_total Number of active requests.
# TYPE nodejs_active_requests_total gauge
nodejs_active_requests_total 2 1504002611981

# HELP nodejs_heap_size_total_bytes Process heap size from node.js in bytes.
# TYPE nodejs_heap_size_total_bytes gauge
nodejs_heap_size_total_bytes 75223040 1504002611981

# HELP nodejs_heap_size_used_bytes Process heap size used from node.js in bytes.
# TYPE nodejs_heap_size_used_bytes gauge
nodejs_heap_size_used_bytes 65013752 1504002611981

# HELP nodejs_external_memory_bytes Nodejs external memory size in bytes.
# TYPE nodejs_external_memory_bytes gauge
nodejs_external_memory_bytes 18243670 1504002611981

# HELP nodejs_heap_space_size_total_bytes Process heap space size total from node.js in bytes.
# TYPE nodejs_heap_space_size_total_bytes gauge
nodejs_heap_space_size_total_bytes{space="new"} 1048576 1504002611981
nodejs_heap_space_size_total_bytes{space="old"} 54525952 1504002611981
nodejs_heap_space_size_total_bytes{space="code"} 10485760 1504002611981
nodejs_heap_space_size_total_bytes{space="map"} 2621440 1504002611981
nodejs_heap_space_size_total_bytes{space="large_object"} 6541312 1504002611981

# HELP nodejs_heap_space_size_used_bytes Process heap space size used from node.js in bytes.
# TYPE nodejs_heap_space_size_used_bytes gauge
nodejs_heap_space_size_used_bytes{space="new"} 655760 1504002611981
nodejs_heap_space_size_used_bytes{space="old"} 49252896 1504002611981
nodejs_heap_space_size_used_bytes{space="code"} 6811456 1504002611981
nodejs_heap_space_size_used_bytes{space="map"} 1826704 1504002611981
nodejs_heap_space_size_used_bytes{space="large_object"} 6468784 1504002611981

# HELP nodejs_heap_space_size_available_bytes Process heap space size available from node.js in bytes.
# TYPE nodejs_heap_space_size_available_bytes gauge
nodejs_heap_space_size_available_bytes{space="new"} 375408 1504002611981
nodejs_heap_space_size_available_bytes{space="old"} 4266952 1504002611981
nodejs_heap_space_size_available_bytes{space="code"} 3228064 1504002611981
nodejs_heap_space_size_available_bytes{space="map"} 751216 1504002611981
nodejs_heap_space_size_available_bytes{space="large_object"} 1424231936 1504002611981

# HELP nodejs_version_info Node.js version info.
# TYPE nodejs_version_info gauge
nodejs_version_info{version="v8.2.1",major="8",minor="2",patch="1"} 1
`;

router.get('/api/v1/namespaces/:namespace/pods', (req, res) => {
  // setTimeout(() => {
    res.status(200).end(JSON.stringify(k8sStub));
  // }, 15000)
});

router.get('/metrics', (req, res) => {
  res.status(200).end(promStub);
});

function injectK8SStub(server) {
  server.use(router);
}

export { injectK8SStub };
