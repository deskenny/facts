Meteor.startup(function () {
  var dummyUserEmail = 'test@test.com'

  if (Meteor.users.find({"emails.address": dummyUserEmail}).count() == 0){

    // Create a test user. `createUser` returns the id of the created user
    var ownerId = Accounts.createUser({
      email: dummyUserEmail,
      password: 'matthew'
    });
  
    [
      {
        name: "test-web1-19",        
        factIds: [],
        nameVals: [{
          "ACTIVEMQ_BROKER_PASSWORD": "dGuDTbhIpU", 
          "ACTIVEMQ_BROKER_USERNAME": "gfHQ", 
          "ACTIVE_WEB_HOSTS": "test-web1-19.corp.globoforce.com", 
          "APP1_INTERNAL": "test-app1-19.corp.globoforce.com", 
          "APP2_INTERNAL": "test-app2-19.corp.globoforce.com", 
          "ELASTIC_SEARCH_HOST": "http://staging-dynamic1.corp.globoforce.com:9292", 
          "ELASTIC_SEARCH_INDEX_ALIAS": "staging_pricebook", 
          "ETC_DIR": "/etc", 
          "HTDOCS": "/opt/apache2/htdocs", 
          "IDP_ADDRESS": "preprod-idp.globoforce.net", 
          "INFORMATICA_IN_HOUSE_URL": "http://test-dynamic1-19.corp.globoforce.com:8080/address-validation-rs/services/addressValidation", 
          "INTEGRATION_SERVERS": [
              "staging-integration1.corp.globoforce.com", 
              "staging-integration2.corp.globoforce.com"
          ], 
          "JDK_HOME": "/opt/jdk/bin/java", 
          "KALTURA_ADMIN_SECRET": "43d49efdbc0e6afd928c0213cea7d813", 
          "KALTURA_PARTNER_ID": "1628042", 
          "KALTURA_SECRET": "eee568c5cf8626569600fee4af5c4789", 
          "KALTURA_UICONFID": "21979881", 
          "KALTURA_UI_CONF_THUMB": "24960991", 
          "MWA_ADDRESS": "https://test-web1-19.corp.globoforce.com/m", 
          "PRODUCTION_MODE": "false", 
          "RULE_REST_SERVICE_ADDRESS": "http://test-dynamic1-19.corp.globoforce.com:8080", 
          "SAGEPAY_NOTIFICATION_HOST": "http://localhost", 
          "SAGEPAY_REDIRECT_HOST": "", 
          "SAGEPAY_REGISTRATION_URL": "http://localhost/mock-sagepay-service/registerForPayment", 
          "SANDBOX0_INTERNAL": "test-sandbox0-19.corp.globoforce.com", 
          "SANDBOX1_INTERNAL": "test-sandbox1-19.corp.globoforce.com", 
          "SERVER_DIR": "/opt/jboss/server/default", 
          "TMP_DIR": "/home/globojboss/tmp"
      }],        
        ownerId: ownerId
      },
      {
        name: "test-sandbox0-19",
        factIds: [],
        nameVals: [{
            "ACTIVEMQ_BROKER_PASSWORD": "dGuDTbhIpU", 
            "ACTIVEMQ_BROKER_USERNAME": "gfHQ", 
            "ACTIVE_WEB_HOSTS": [
                "test-web1-19.corp.globoforce.com"
            ],       
            "ADP_KEYSTORE_NAME": "devAdpUserCert.pfx", 
            "ADP_KEYSTORE_PASSWORD": "VZ5t7K3krpuPwp7b", 
            "ADP_SERVER_NAME": "api.adp.com", 
            "APP1_INTERNAL": "test-app1-19.corp.globoforce.com", 
            "APP2_INTERNAL": "test-app2-19.corp.globoforce.com", 
            "DATALOADS_HOME": "/home/dataloads/dataload", 
            "DATALOADS_SERVER": "dataloads@test-app1-19.corp.globoforce.com", 
            "ELASTIC_SEARCH_HOST": "http://staging-dynamic1.corp.globoforce.com:9292", 
            "ELASTIC_SEARCH_INDEX_ALIAS": "staging_pricebook", 
            "ETC_DIR": "/etc", 
            "HOME_CONFIG_APP": "/home/globojboss/configapp", 
            "HTDOCS": "/opt/apache2/htdocs", 
            "IDP_ADDRESS": "preprod-idp.globoforce.net", 
            "INFORMATICA_IN_HOUSE_URL": "http://test-dynamic1-19.corp.globoforce.com:8080/address-validation-rs/services/addressValidation", 
            "INTEGRATION_SERVERS": [
                "staging-sandbox1.corp.globoforce.com"
            ], 
            "JDK_HOME": "/opt/jdk/bin/java", 
            "KALTURA_ADMIN_SECRET": "43d49efdbc0e6afd928c0213cea7d813", 
            "KALTURA_PARTNER_ID": "1628042", 
            "KALTURA_SECRET": "eee568c5cf8626569600fee4af5c4789", 
            "KALTURA_UICONFID": "21979881", 
            "KALTURA_UI_CONF_THUMB": "24960991", 
            "MAIL_FROM": "qa07@globoforce.com", 
            "MAIL_SMTP_USER": "qa07", 
            "MAIL_TO": "qa07@globoforce.com", 
            "MWA_ADDRESS": "https://test-sandbox0-19.corp.globoforce.com/m", 
            "PRODUCTION_MODE": "false", 
            "RULE_REST_SERVICE_ADDRESS": "http://test-sandbox1-19.corp.globoforce.com:8080", 
            "SAGEPAY_NOTIFICATION_HOST": "http://localhost", 
            "SAGEPAY_REDIRECT_HOST": "", 
            "SAGEPAY_REGISTRATION_URL": "http://localhost/mock-sagepay-service/registerForPayment", 
            "SANDBOX0_INTERNAL": "test-sandbox0-19.corp.globoforce.com", 
            "SANDBOX1_INTERNAL": "test-sandbox1-19.corp.globoforce.com", 
            "SERVER_DIR": "/opt/jboss/server/default", 
            "TMP_DIR": "/home/globojboss/tmp"
        }],   
        ownerId: ownerId
      },
      {
        name: "test-app1-19",
        factIds: [],
        nameVals: [{
              "ACTIVEMQ_BROKER_PASSWORD": "dGuDTbhIpU", 
              "ACTIVEMQ_BROKER_USERNAME": "gfHQ", 
              "ACTIVE_WEB_HOSTS": "test-web1-19.corp.globoforce.com", 
              "ADP_KEYSTORE_NAME": "devAdpUserCert.pfx", 
              "ADP_KEYSTORE_PASSWORD": "VZ5t7K3krpuPwp7b", 
              "ADP_SERVER_NAME": "api.adp.com", 
              "ALLIED_CATALOG_EMAIL_BUSINESS_TO": "preprod@globoforce.com", 
              "ALLIED_CATALOG_EMAIL_DEFAULT_TO": "preprod@globoforce.com", 
              "ALLIED_CATALOG_EMAIL_PRODSUPPORT_TO": "preprod@globoforce.com", 
              "ALLIED_CATALOG_FTP_PASSWORD": "27b6dd6051", 
              "ALLIED_CATALOG_FTP_URL": "sftp://lukasz-test:{password}@ftp-test.globoforce.com/SEND/gammaberry/allied/Catalogs", 
              "ALLIED_CATALOG_INTEGRATION_ENABLED": "true", 
              "ALLIED_CATALOG_SCHEDULER_CRON": "0 0 6 * * ? 2099", 
              "ALLIED_ENVIRONMENT": "test-app1-19", 
              "ALLIED_INTEGRATION_ENABLED": "true", 
              "ALLIED_RING_ORDER_ERROR_EMAIL_TO": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_ACKNOWLEDGEMENT_ERROR_EMAIL_CC": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_ACKNOWLEDGEMENT_ERROR_EMAIL_TO": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_AUTHENTICATION_ERROR_EMAIL_CC": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_AUTHENTICATION_ERROR_EMAIL_TO": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_CANCELLATION_ERROR_EMAIL_CC": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_CANCELLATION_ERROR_EMAIL_TO": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_INVOICE_FTP_DIRECTORY": "/yospackallied/RECEIVE",
              "ALLIED_YOSPACK_INVOICE_FTP_PASSWORD": "wPuXju6vTnD8K191dqoz", 
              "ALLIED_YOSPACK_INVOICE_FTP_SERVER": "ftp-test.corp.globoforce.com", 
              "ALLIED_YOSPACK_INVOICE_FTP_USER": "yospack", 
              "ALLIED_YOSPACK_INVOICE_LISTENER_CRON": "0 0/5 * 1/1 * ? *", 
              "ALLIED_YOSPACK_INVOICE_LOCAL_DIRECTORY": "/home/globojboss/yospack",
              "ALLIED_YOSPACK_INVOICE_RECONCILIATION_REPORT_EMAIL_TO": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_TRACKING_ERROR_EMAIL_CC": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_TRACKING_ERROR_EMAIL_TO": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_UNEXPECTED_ERROR_EMAIL_CC": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_UNEXPECTED_ERROR_EMAIL_TO": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_VALIDATION_ERROR_EMAIL_TO": "preprod@globoforce.com", 
              "ALLIED_YOSPACK_WS_SHARED_SECRET": "Globo2@llied", 
              "ALLIED_YOSPACK_WS_URL": "https://secure.thealliedgrp.com/Globoforce/YOSTEST/ORDERS", 
              "APNS_CERTIFICATE_PASSWORD": "apnsproduction", 
              "APNS_FEEDBACK_HOST": "feedback.push.apple.com", 
              "APNS_GATEAWAY_HOST": "gateway.push.apple.com", 
              "APP1_INTERNAL": "test-app1-19.corp.globoforce.com", 
              "APP2_INTERNAL": "test-app2-19.corp.globoforce.com", 
              "ELASTIC_SEARCH_HOST": "http://staging-dynamic1.corp.globoforce.com:9292", 
              "ELASTIC_SEARCH_INDEX_ALIAS": "staging_pricebook", 
              "ETC_DIR": "/etc", 
              "FMD_DB_REMOTE_IS_LOCAL": "true", 
              "GRS_CATALOG_FTP_PASSWORD": "ENC(2c6b7579ce72c442851dca7c259e24b)", 
              "GRS_CATALOG_FTP_URL": "sftp://lukasz-test:{password}@ftp-test.globoforce.com/SEND/GRS/outgoing/", 
              "GRS_EMAIL_BUSINESS_TO": "preprod@globoforce.com", 
              "GRS_EMAIL_DEFAULT_TO": "preprod@globoforce.com", 
              "GRS_EMAIL_ORDER_CANCELLED_TO": "preprod@globoforce.com", 
              "GRS_EMAIL_PRODSUPPORT_TO": "preprod@globoforce.com", 
              "GRS_ENCRYPTED_API_TOKEN": "ENC(274cb6d8fc9cd14810ffa6ed795344924966321230bb2684bd72430a23e891e8ebda2440167a908d5ba25e6d94593a74)", 
              "GRS_ENVIRONMENT": "test-app1-19", 
              "GRS_ORDER_SENDER_MODIFY_TIME_OFFSET": "2", 
              "GRS_ORDER_SENDER_QUERY_ROWS_COUNT": "100", 
              "GRS_ORDER_SENDER_TIMER_PERIOD": "7200000", 
              "GRS_ORDER_TRACKER_MODIFY_TIME_OFFSET": "4", 
              "GRS_ORDER_TRACKER_QUERY_ROWS_COUNT": "100", 
              "GRS_ORDER_TRACKER_TIMER_PERIOD": "14400000", 
              "GRS_VALIDATION_ERROR_EMAIL_TO": "preprod@globoforce.com", 
              "GRS_WS_URL": "https://api-uat.grsportal.com/PartnerApiV3.php", 
              "HTDOCS": "/opt/apache2/htdocs", 
              "IDP_ADDRESS": "preprod-idp.globoforce.net", 
              "INFORMATICA_IN_HOUSE_URL": "http://test-dynamic1-19.corp.globoforce.com:8080/address-validation-rs/services/addressValidation", 
              "INTEGRATION_SERVERS": [
                  "staging-integration1.corp.globoforce.com", 
                  "staging-integration2.corp.globoforce.com"
              ], 
              "INTGR_EMAIL_CC_ADDRESS": "test@globoforce.com", 
              "INTGR_EMAIL_FROM_ADDRESS": "default.email@globoforce.com", 
              "INTGR_EMAIL_TEST_MODE": "true", 
              "INTGR_EMAIL_TOKEN_HOSTNAME": "localhost", 
              "INTGR_EMAIL_TO_ADDRESS": "default.email@globoforce.com", 
              "INTGR_SMTP_HOST": "localhost", 
              "INTGR_SMTP_PASSWORD": "p", 
              "INTGR_SMTP_USERNAME": "u", 
              "JDK_HOME": "/opt/jdk/bin/java", 
              "KALTURA_ADMIN_SECRET": "43d49efdbc0e6afd928c0213cea7d813", 
              "KALTURA_PARTNER_ID": "1628042", 
              "KALTURA_SECRET": "eee568c5cf8626569600fee4af5c4789", 
              "KALTURA_UICONFID": "21979881", 
              "KALTURA_UI_CONF_THUMB": "24960991", 
              "PI_CATALOG_FTP_PASSWORD": "27b6dd6051", 
              "PI_CATALOG_FTP_URL": "sftp://lukasz-test:{password}@ftp-test.globoforce.com/SEND/gammaberry/pi/Catalogs", 
              "PI_EMAIL_BUSINESS_TO": "preprod@globoforce.com", 
              "PI_EMAIL_DEFAULT_TO": "preprod@globoforce.com", 
              "PI_EMAIL_PRODSUPPORT_TO": "preprod@globoforce.com", 
              "PI_ENVIRONMENT": "test-app1-19", 
              "PRODUCTION_MODE": "false", 
              "RULE_REST_SERVICE_ADDRESS": "http://test-dynamic1-19.corp.globoforce.com:8080", 
              "RYMAX_CATALOG_FTP_PASSWORD": "27b6dd6051", 
              "RYMAX_CATALOG_FTP_URL": "sftp://lukasz-test:{password}@ftp-test.globoforce.com/SEND/gammaberry/rymax/Catalogs", 
              "RYMAX_EMAIL_BUSINESS_TO": "preprod@globoforce.com", 
              "RYMAX_EMAIL_DEFAULT_TO": "preprod@globoforce.com", 
              "RYMAX_EMAIL_PRODSUPPORT_TO": "preprod@globoforce.com", 
              "RYMAX_ENVIRONMENT": "test-app1-19", 
              "RYMAX_STATIC_CONTENT_HOST": "preprod-static.globoforce.net", 
              "SAGEPAY_NOTIFICATION_HOST": "http://localhost", 
              "SAGEPAY_REDIRECT_HOST": "", 
              "SAGEPAY_REGISTRATION_URL": "http://localhost/mock-sagepay-service/registerForPayment", 
              "SANDBOX0_INTERNAL": "test-sandbox0-19.corp.globoforce.com", 
              "SANDBOX1_INTERNAL": "test-sandbox1-19.corp.globoforce.com", 
              "SERVER_DIR": "/opt/jboss/server/default", 
              "SWIFT_CAD_PASSWORD": "ENC(-781f295b2a5026eb3f44dfbbfa6b2843)", 
              "SWIFT_CAD_USERNAME": "A2A214107", 
              "SWIFT_DEFAULT_PASSWORD": "ENC(e3e19bf8114c95d0eeae6e32d2a9656)", 
              "SWIFT_DEFAULT_USERNAME": "A2A214021", 
              "SWIFT_KEYSTORE_PASSWORD": "ENC(-5dfc4eb102bb8fe7520f6e5b5e445ae1)", 
              "SWIFT_PROMOCODE_DEFAULT_PASSWORD": "ENC(-7416468180a01eb0cf9294e8dae59a62735e67499b526356)", 
              "SWIFT_PROMOCODE_DEFAULT_USERNAME": "Globoforce2014test", 
              "SWIFT_PROMOCODE_GBP_PASSWORD": "ENC(-7416468180a01eb0cf9294e8dae59a62735e67499b526356)", 
              "SWIFT_PROMOCODE_GBP_USERNAME": "Globoforce2014test", 
              "SWIFT_PROMOCODE_SERVICE": "https://omsitest.swiftprepaid.com/API/PromocodeService.svc", 
              "SWIFT_SERVER_NAME": "a2a.uatfisprepaid.com", 
              "TMP_DIR": "/home/globojboss/tmp"
         }],   
        propNames: ["email", "db"],        
        values: ["test@test.com", "GD01"],
        ownerId: ownerId
      }
    ].forEach(function(server){
      Servers.insert(server);
    });

    // Create a fact
    var server1 = Servers.find().fetch()[0];
    var server2 = Servers.find().fetch()[1];

    var fact = {
      completed: false,
      ownerId: ownerId,
      servers: [
        {name: server1.name, _id: server1._id, score: 0},
        {name: server2.name, _id: server2._id, score: 0}
      ]
    };
   
    var factId = Facts.insert(fact);

    // Add this fact to both servers factIds
    Servers.update({_id: server1._id}, {$addToSet: { factIds: factId}});
    Servers.update({_id: server2._id}, {$addToSet: { factIds: factId}});
  }
});


