
import { TeamAccordion } from '../../components/TeamAccordion/TeamAccordion';
import './TeamsPage.scss';

export const TeamsPage = () => {
    return (
        <main className='teams-page'>
            <TeamAccordion />
            <TeamAccordion />
            <TeamAccordion />
        </main>
    )
}