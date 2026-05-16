import { Award, Calendar, Trophy, Medal, Star } from "lucide-react";

const awards = [
    {
        id: 1,
        title: "Best Software Developer 2022",
        organization: "Tech Organization",
        date: "2022",
        description: "Recognized for exceptional software development skills and outstanding technical contributions.",
        icon: Trophy,
        featured: true,
        image: "/images/awards/Avishka Nirmitha Best Software Developer 2022 Spera.jpeg", // Add your image to public/awards/best-software-developer-2022.jpg
    },
    {
        id: 2,
        title: "Exceptional Contributor 2024",
        organization: "Tech Organization",
        date: "2024",
        description: (
            <span>
                Awarded for exceptional contributions to projects and significant impact on team success. This prestigious recognition also included an <strong className="text-primary font-semibold">international tour to Bangkok.</strong>
            </span>
        ),
        icon: Medal,
        featured: true,
        image: "/images/awards/Avishka Nirmitha Exceptional Contributor of the year 2024 Spera .jpeg", // Add your image to public/awards/exceptional-contributor-2024.jpg
    },
];

const AwardsPage = () => {
    const featuredAwards = awards.filter((a) => a.featured);
    const otherAwards = awards.filter((a) => !a.featured);

    return (
        <div className="flex-grow pt-12 pb-20">
            <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter name-glow mb-6">
                        Awards & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Recognition</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                        A collection of honors, accolades, and recognitions received throughout my journey in AI, robotics, and automation engineering.
                    </p>
                </div>

                {/* Featured Awards */}
                <div className="mb-16">
                    {/* <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                        <Trophy className="size-4 text-primary" />
                        Featured Awards
                    </h2> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredAwards.map((award) => {
                            const Icon = award.icon;
                            return (
                                <div
                                    key={award.id}
                                    className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/30 transition-all"
                                >
                                    {award.image && (
                                        <div className="relative w-full h-44 overflow-hidden">
                                            <img
                                                src={award.image}
                                                alt={`${award.title} photo`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                                        </div>
                                    )}
                                    <div className="p-6 md:p-8 flex flex-col gap-5">
                                        <div className="flex items-start justify-between">
                                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <Icon className="size-6 text-primary" />
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-secondary border border-border rounded-lg px-3 py-1">
                                                <Calendar className="size-3" />
                                                {award.date}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {award.title}
                                            </h3>
                                            <p className="text-sm font-medium text-primary/80">{award.organization}</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Other Awards */}
                {/* <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
                        <Award className="size-4 text-primary" />
                        Additional Recognition
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherAwards.map((award) => {
                            const Icon = award.icon;
                            return (
                                <div
                                    key={award.id}
                                    className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/30 transition-all"
                                >
                                    {award.image && (
                                        <div className="relative w-full h-36 overflow-hidden">
                                            <img
                                                src={award.image}
                                                alt={`${award.title} photo`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                                        </div>
                                    )}
                                    <div className="p-6 flex flex-col gap-4">
                                        <div className="flex items-start justify-between">
                                            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <Icon className="size-5 text-primary" />
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-secondary border border-border rounded-lg px-3 py-1">
                                                <Calendar className="size-3" />
                                                {award.date}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                {award.title}
                                            </h3>
                                            <p className="text-xs font-medium text-primary/80">{award.organization}</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default AwardsPage;