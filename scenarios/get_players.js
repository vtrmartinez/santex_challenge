import http from 'k6/http';
import {sleep} from 'k6';
import {Trend, Rate, Counter} from 'k6/metrics';
import {check, fail} from 'k6';

export let GetPlayersDuration = new Trend('get_players_duration');
export let GetPlayersFailRate = new Trend('get_players_fail_rate');
export let GetPlayersSuccessRate = new Trend('get_players_success_rate');
export let GetPlayersReqs = new Trend('get_players_reqs');

export default function () {
    let res = http.get('https://players.free.beeceptor.com/api/stats/player')

    GetPlayersDuration.add(res.timings.duration);
    GetPlayersReqs.add(1);
    GetPlayersFailRate.add(res.status == 0 || res.status > 399);
    GetPlayersSuccessRate.add(res.status < 399);

    let durationMsg = 'Max Duration ${1000/1000}s'
    if(!check(res,{
        'max duration': (r) => r.timings.duration < 1000,
    })){
        fail(durationMsg);
    }

    sleep(1);
}