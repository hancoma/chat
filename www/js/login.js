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
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
      

        console.log('Received Event: ' + id);
        app.onmain();
    },
    onmain : function() {
       
    }
};




$("#find_pw_btn").click(
    function() {

        var modal = UIkit.modal("#find_pw_uk_modal",{center: true});
           modal.show();


    })
$("#find_pw_submit").click(
    function() {
        var email=$("#email").val()
        alert_msg("MESSAGE",email+" send new password");
        var modal = UIkit.modal("#find_pw_uk_modal");
           modal.hide();
    })

$("#login_btn").click(
    function() {
    var user_id=$("#user_id").val();
    var password=$("#password").val();
    if (!user_id) {
        alert_msg("LOGIN","메일을 입력하세요."); 
        
        exit;
    }
    if (!password) {
        alert_msg("LOGIN","비밀번호를 입력하세요."); 
      
        exit;
    }
    login_press(user_id,password);

    })

function login_press(user_id,password) {
    var user_id=user_id;
    var password=password;

     $.post("http://ku4h.com/login_check.php",
   {
    user_id:user_id,
    password:password
    
       },
   function(data){
     console.log(data);
    if (data=="ok"){
   
    alert_msg("LOGIN","로그인 되었습니다.");
    // 회원 memberuid 가져오기
        window.localStorage.setItem("user_id", user_id);
        user_id = window.localStorage.getItem("user_id");
        console.log(user_id);
               $.post("http://ku4h.com/login_check_uid.php",
               {
                user_id:user_id
                   },
               function(data){
                
                window.localStorage.setItem("member_srl", data);
                member_srl = window.localStorage.getItem("member_srl");
                console.log(member_srl);
                 location.replace('main.html') ;
               });
          


    } else {
 alert_msg("LOGIN",data);

    } 
   });
}

function join_press() {

    var modal = UIkit.modal("#join_uk_modal",{center: true});
           modal.show();
           
   
}
function save_member() {
    var user_name=$("#user_name").val();
    var join_email=$("#join_email").val();
    var join_pw1=$("#join_pw1").val();
    var join_pw2=$("#join_pw2").val();
    var nick_name=$("#nick_name").val();
   
      if (!user_name) {
        alert_msg("회원가입","이름을 입력하세요.");
        return;
    }
    if (!join_email) {
        alert_msg("회원가입","이메일을 입력하세요.");
        return;
    }
   
     if (!join_pw1) {
        alert_msg("회원가입","비밀번호를 입력하세요.");
        return;
    }
       if (!join_pw2) {
        alert_msg("회원가입","비밀번호를 입력하세요.");
        return;
    }

       if (join_pw1!=join_pw2) {
        alert_msg("회원가입","비밀번호가 다릅니다. 다시 입력하세요.");
        return;
    }

    if (!nick_name) {
        alert_msg("회원가입","닉네임을 입력 하세요.");
        return;
    }


                $.post("http://ku4h.com/join_member_bang.php",
               {
                email:join_email,
                password:join_pw1,
                nick_name:nick_name,
                user_name:user_name
                   },
               function(data){
                console.log(data);
                alert_msg("감사합니다.","회원가입이 완료 되었습니다.");
  var modal = UIkit.modal("#join_uk_modal",{center: true});
           modal.hide();

               });

}