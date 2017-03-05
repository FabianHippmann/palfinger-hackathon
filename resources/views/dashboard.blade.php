     <div class="content flex-container">
                <div class="bigitem panel">
                    <h2 class="title">
                        Konversation
                    </h2>
                    <div class="conversation">
                        @foreach($logs as $log)
                        <div class="bubble-container">
                            <div class="question bubble">{{$log->question}}
                            <div class="sent-date">{{$log->created_at->diffForHumans()}}</div></div>

                        </div>
                        <div class="bubble-container">
                            <div class="answer bubble">{{$log->answer}}</div>
                        </div>
                        @endforeach
                    {{--     <div class="bubble-container">
                        <div class="input-field col s12">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Nachricht</label>
        </div>

                        </div> --}}
                    </div>
                </div>
                <div class="smallitem panel">
                {{--     <h2 class="title">
                        System-log
                    </h2> --}}
                    <div class="syslog">
                        <h3>Aktueller Auftrag</h3>
                        @if($supportTickets->count() > 0)
                        <div class="notification">
                            {{$supportTickets->count() == 1 ? 'eine' : $supportTickets->count()}} neue Supportanfrage!  <br>
                            #123
                        </div>
                        @endif
                        <h4>Name</h4>
                        <p>{{$journey->name}}</p>
                        <h4>Fahrzeug</h4>
                        <p>PK 16002</p>
                        <h4>Fahrer</h4>
                        <p>Martin Zehnder</p>
                        <h4>Ziel</h4>
                        <p>{{$journey->deliveryNote->additional_information['street']}}</p>
                    </div>
                </div>
            </div>