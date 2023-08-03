import GetPlayers from './scenarios/get_players.js';
import {group, sleep} from 'k6';

export default () => {
    group('Endpoint Get Players - Beeceptor Mocked API', () => {
        GetPlayers();
    });

    sleep(1);
}