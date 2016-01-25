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
          "ACTIVEMQ_BROKER_PASSWORD": "DFdfd452", 
          "ACTIVEMQ_BROKER_USERNAME": "gfHQ123", 
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
          "KALTURA_ADMIN_SECRET": "3454564565sdfgsdfvzdt435dfgdg", 
          "KALTURA_PARTNER_ID": "234234234", 
          "KALTURA_SECRET": "sdgsdg34534ag43545", 
          "KALTURA_UICONFID": "36546546", 
          "KALTURA_UI_CONF_THUMB": "76573424", 
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
            "ACTIVEMQ_BROKER_PASSWORD": "345345345df", 
            "ACTIVEMQ_BROKER_USERNAME": "gfHQ123", 
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
            "KALTURA_ADMIN_SECRET": "324534686234sdgsdfg456", 
            "KALTURA_PARTNER_ID": "345345345", 
            "KALTURA_SECRET": "sdfgsdsdfgsdfg4564564", 
            "KALTURA_UICONFID": "45645654645", 
            "KALTURA_UI_CONF_THUMB": "456546456", 
            "MAIL_FROM": "qa07123@globoforce.com", 
            "MAIL_SMTP_USER": "qa07123", 
            "MAIL_TO": "qa07123@globoforce.com", 
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
              "ACTIVEMQ_BROKER_PASSWORD": "345345fdsfg", 
              "ACTIVEMQ_BROKER_USERNAME": "gfHQ123", 
              "ACTIVE_WEB_HOSTS": "test-web1-19.corp.globoforce.com", 
              "ADP_KEYSTORE_NAME": "devAdpUserCertccc.pfx", 
              "ADP_KEYSTORE_PASSWORD": "sdgsdg34534gsdfgsdfg", 
              "ADP_SERVER_NAME": "api.adp.com", 
              "ALLIED_CATALOG_EMAIL_BUSINESS_TO": "preprod@globoforce.com", 
              "ALLIED_CATALOG_EMAIL_DEFAULT_TO": "preprod@globoforce.com", 
              "ALLIED_CATALOG_EMAIL_PRODSUPPORT_TO": "preprod@globoforce.com", 
              "ALLIED_CATALOG_FTP_PASSWORD": "4356456456456", 
              "ALLIED_CATALOG_FTP_URL": "sftp://prtdon-test:{password}@ftp-test.globoforce.com/SEND/gammaberry/allied/Catalogs", 
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
              "ALLIED_YOSPACK_INVOICE_FTP_PASSWORD": "sdgsdfg34534543dfsgsdfg", 
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
              "ALLIED_YOSPACK_WS_SHARED_SECRET": "sdgsdg3454352@dfgdfgllied", 
              "ALLIED_YOSPACK_WS_URL": "https://secure.thealliedgrp.com/Globoforce/YOSTEST/ORDERS", 
              "APNS_CERTIFICATE_PASSWORD": "e354esdgdfg", 
              "APNS_FEEDBACK_HOST": "feedback.push.apple.com", 
              "APNS_GATEAWAY_HOST": "gateway.push.apple.com", 
              "APP1_INTERNAL": "test-app1-19.corp.globoforce.com", 
              "APP2_INTERNAL": "test-app2-19.corp.globoforce.com", 
              "ELASTIC_SEARCH_HOST": "http://staging-dynamic1.corp.globoforce.com:9292", 
              "ELASTIC_SEARCH_INDEX_ALIAS": "staging_pricebook", 
              "ETC_DIR": "/etc", 
              "FMD_DB_REMOTE_IS_LOCAL": "true", 
              "GRS_CATALOG_FTP_PASSWORD": "ENC(sdfgdfg345345435435sdg)", 
              "GRS_CATALOG_FTP_URL": "sftp://lukasz-test:{password}@ftp-test.globoforce.com/SEND/GRS/outgoing/", 
              "GRS_EMAIL_BUSINESS_TO": "preprod@globoforce.com", 
              "GRS_EMAIL_DEFAULT_TO": "preprod@globoforce.com", 
              "GRS_EMAIL_ORDER_CANCELLED_TO": "preprod@globoforce.com", 
              "GRS_EMAIL_PRODSUPPORT_TO": "preprod@globoforce.com", 
              "GRS_ENCRYPTED_API_TOKEN": "ENC(345435435435j3h45lk34h5lk3jh45kj43h534kjh5k34534534534)", 
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
              "INTGR_EMAIL_CC_ADDRESS": "testtest@globoforce.com", 
              "INTGR_EMAIL_FROM_ADDRESS": "default.email@globoforce.com", 
              "INTGR_EMAIL_TEST_MODE": "true", 
              "INTGR_EMAIL_TOKEN_HOSTNAME": "localhost", 
              "INTGR_EMAIL_TO_ADDRESS": "default.email@globoforce.com", 
              "INTGR_SMTP_HOST": "localhost", 
              "INTGR_SMTP_PASSWORD": "p", 
              "INTGR_SMTP_USERNAME": "u", 
              "JDK_HOME": "/opt/jdk/bin/java", 
              "KALTURA_ADMIN_SECRET": "344543543534sdafsdfsd", 
              "KALTURA_PARTNER_ID": "43543534534", 
              "KALTURA_SECRET": "34534543534543534redfsg", 
              "KALTURA_UICONFID": "65463456", 
              "KALTURA_UI_CONF_THUMB": "645645645", 
              "PI_CATALOG_FTP_PASSWORD": "345rsgt43t534", 
              "PI_CATALOG_FTP_URL": "sftp://sdgsdfg-test:{password}@ftp-test.globoforce.com/SEND/gammaberry/pi/Catalogs", 
              "PI_EMAIL_BUSINESS_TO": "preprod@globoforce.com", 
              "PI_EMAIL_DEFAULT_TO": "preprod@globoforce.com", 
              "PI_EMAIL_PRODSUPPORT_TO": "preprod@globoforce.com", 
              "PI_ENVIRONMENT": "test-app1-19", 
              "PRODUCTION_MODE": "false", 
              "RULE_REST_SERVICE_ADDRESS": "http://test-dynamic1-19.corp.globoforce.com:8080", 
              "RYMAX_CATALOG_FTP_PASSWORD": "356rsgdfgsdfgdfg", 
              "RYMAX_CATALOG_FTP_URL": "sftp://sdfgdfg-test:{password}@ftp-test.globoforce.com/SEND/gammaberry/rymax/Catalogs", 
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
              "SWIFT_CAD_PASSWORD": "ENC(-sdgsdg3454354edsgdsfgfdsg)", 
              "SWIFT_CAD_USERNAME": "A2A214107", 
              "SWIFT_DEFAULT_PASSWORD": "ENC(3454ew543tdsfgsdfg345435)", 
              "SWIFT_DEFAULT_USERNAME": "sdg345435drgts", 
              "SWIFT_KEYSTORE_PASSWORD": "ENC(-345dfgsdfgsdfgdfg)", 
              "SWIFT_PROMOCODE_DEFAULT_PASSWORD": "ENC(-345435gdsfgsdfgsdfgdsfg)", 
              "SWIFT_PROMOCODE_DEFAULT_USERNAME": "fgsdfgsdfg2014test", 
              "SWIFT_PROMOCODE_GBP_PASSWORD": "ENC(-6y546534gsdfgdsfgdsfgdfsg)", 
              "SWIFT_PROMOCODE_GBP_USERNAME": "fgsdfgsdfg2014test", 
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


