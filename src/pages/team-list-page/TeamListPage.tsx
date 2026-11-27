import {useEffect, useState} from "react";
import type {TeamsModel} from "../../models/teams.model.ts";
import {supabase} from "../../lib/supabase.ts";


function TeamListPage() {
    const [teams, setTeams] = useState<TeamsModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getTeams = async () => {
            const { data, error } = await supabase
                .from("teams")
                .select("*");

            if (error) {
                setError(error.message);
            } else {
                setTeams((data ?? []) as TeamsModel[]);
            }

            setLoading(false);
        };

        getTeams();
    }, []);

    if (loading) return <p>در حال بارگذاری تیم‌ها...</p>;
    if (error) return <p>خطا: {error}</p>;
    if (teams.length === 0) return <p>تیمی پیدا نشد.</p>;

    return (
        <>
            <div className="teams-list">
                {teams.map((team) => (
                    <div className="team-card" key={team.id}>
                        <h2>{team.name}</h2>

                        {team.description && <p>{team.description}</p>}

                        {team.contact_email && (
                            <a href={`mailto:${team.contact_email}`}>
                                {team.contact_email}
                            </a>
                        )}

                        {team.github_url && (
                            <a href={team.github_url} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        )}
                    </div>
                ))}
            </div>
            <iframe
                src="https://copyarzan.ir/"
                title="دموی سایت کپی ارزان"
                loading="lazy"
                style={{ width: "100%", height: "80vh", border: 0 }}
            />
        </>
    )
}

export default TeamListPage
