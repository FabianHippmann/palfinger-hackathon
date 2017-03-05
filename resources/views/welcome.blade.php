<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>
            Palfinger Assistant 
        </title>
            
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"/>
      {{--     <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script> --}}

        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
       
        <style>
                
                                    html, body {
                                        background-color: #eff2f2;
                                        color: #636b6f;
                                        font-family: 'Open Sans', sans-serif;
                                        font-weight: 100;

                                        height: 100vh;
                                        margin: 0;
                                    }
                                    header{
                                        padding: 20px 40px;
                                        background: -moz-linear-gradient(0deg, rgba(192,4,24,1) 0%, rgba(228,67,25,1) 100%); /* ff3.6+ */
                background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(192,4,24,1)), color-stop(100%, rgba(228,67,25,1))); /* safari4+,chrome */
                background: -webkit-linear-gradient(0deg, rgba(192,4,24,1) 0%, rgba(228,67,25,1) 100%); /* safari5.1+,chrome10+ */
                background: -o-linear-gradient(0deg, rgba(192,4,24,1) 0%, rgba(228,67,25,1) 100%); /* opera 11.10+ */
                background: -ms-linear-gradient(0deg, rgba(192,4,24,1) 0%, rgba(228,67,25,1) 100%); /* ie10+ */
                background: linear-gradient(90deg, rgba(192,4,24,1) 0%, rgba(228,67,25,1) 100%); /* w3c */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c00418', endColorstr='#e44319',GradientType=1 ); /* ie6-9 */
            margin-bottom: 30px;
                                    }
                                    .full-height {
                                        height: 100vh;
                                    }
                                    
                                    .flex-container {
                                        padding: 0 60px; 
                                        width: 100%;
                                        display: flex;
                                    }
                        
                                    .position-ref {
                                        position: relative;
                                    }
                        
                                    .top-right {
                                        position: absolute;
                                        right: 10px;
                                        top: 18px;
                                    }
                        
                                    .content {
                                        text-align: left;
                                    }
                                    h3{
                                        margin: 0 -10px;
    font-size: 16px;
    margin: 0;
    margin: 0 -10px;
    font-weight: bold;
    color: #333;
    padding: 0 10px 4px 10px;
    border-bottom: 1px solid #cecece;
                                    }
                                    h4{
                                        color: #333;
                                        margin: 0;
                                        margin-top: 5px;
                                        font-size: 14px;
                                        font-weight: bold;
                                    }
                                    p{
                                        margin: 0;
                                    }
                                    .syslog{
                                        padding: 10px;
                                    }
                                    .title {
                                            font-size: 20px;
    font-size: 17px;
    text-align: left;
    display: block;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 10px;
    margin: 0;
                                    }
                                    .panel{
        
                                        border-radius: 5px;
                                        min-height: 100px;
                                        width: 100px;
                                        margin: 7.5px;
                                        background-color: #fff;
                                            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0,0,0,0.23);
                                    }
                                    .links > a {
                                        color: #636b6f;
                                        padding: 0 25px;
                                        font-size: 12px;
                                        font-weight: 600;
                                        letter-spacing: .1rem;
                                        text-decoration: none;
                                        text-transform: uppercase;
                                    }
                        
                                    .m-b-md {
                                        margin-bottom: 30px;
                                    }
                                    .bigitem {
           /* This will be twice as big as the small item. */
           -webkit-flex: 2 0 0; 
           flex: 2 0 0; 
        }
        .smallitem {
           -webkit-flex: 1 0 0;
           flex: 1 0 0;
        }
    .conversation{
        padding: 10px;
    }
    
        .bubble {
    border-radius: 20px;
    display: block;
    margin-bottom: 8px;
    padding: 7.5px 15px;
        font-size: 16px;
    font-weight: 400;
        max-width: 72%;
        text-align: left;
        color: #000;

}
.sent-date{
        display: block;
    text-align: right;
    font-size: 12px;
}
.bubble.question{

    background-color: rgba(255, 228, 0, 0.26);

}
.bubble.answer{
    float: right;
    text-align: left;
    min-width: 40%;
    background-color: #eff2f2;
}
.bubble-container{
    width: 100%;
    float: left;
    display: block;
}
textarea{
}

.notification {
    background-color: #dc3619;
    margin-left: -10px;
    color: #fff;
    margin-right: -10px;
    padding: 13px;
}
                                </style>
    </head>

    <body>
        <div class="position-ref full-height">
            <header>
                <img src="{{ asset('images/logo.png') }}"/>
            </header>
            <div id="container">
                
            </div>
        </div>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
 <script>
    // setInterval(function(){
        $(document).ready(function(){
            
        $( "#container" ).load( "/ajax/dashboard" );
        });
    // }, 300);

    </script>
    </body>
</html>
