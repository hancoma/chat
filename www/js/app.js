/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
          document.addEventListener("backbutton", onBackKeyDown, false);
       
        app.receivedEvent('deviceready');
        
       
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
        console.log('Received Event: ' + id);
       
      

        app.onmain();


    },
    onmain : function() {
    var reg_id=device.uuid;
       // 기기 번호 검출 

          console.log('Received Event: ' + reg_id);

          push = PushNotification.init({
    android: {
        senderID: "870999976688"
    },
    browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    },
    ios: {
        alert: "true",
        badge: "true",
        sound: "true"
    },
    windows: {}
});
          PushNotification.hasPermission(function(data) {
    if (data.isEnabled) {
        console.log('isEnabled');
    }
});


push.on('registration', function(data) {
    console.log(data.registrationId);




  
     main_show();
     inapp();

});

push.on('notification', function(data) {
  // alert(data.message);
  var title=data.title;
  if (title=="ku4h전체공지"){
alert_msg(title,data.message);  
} else {
    modal = UIkit.modal.blockUI(data.message); 
}
  //display_call_info(data.message);
    
       setTimeout(function(){ modal.hide() }, 1000)
 
  //alert_msg("알람",data.message);
 
 
    
   
});

push.on('error', function(e) {
    // e.message
    alert_msg("경고",e.message);
});

   
       
}
};


function inapp() {
  

  const productId = 'com.ku4h.atopynews1';
inAppPurchase
  .buy(productId)
  .then((res) => {
    console.log('purchase completed!');
    // unlock level 1
  })
  .catch(err => console.log(err) );

}