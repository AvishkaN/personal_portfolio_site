import { useState } from "react";
import { Award, Calendar, Trophy, Medal, Star, Eye, X, Plane, LayoutGrid, LayoutList } from "lucide-react";

const awards = [
    {
        id: 1,
        title: "Best Software Developer 2022",
        organization: "Hotel Royal Grand Paradise",
        date: "2022",
        description: "Recognized for exceptional software development skills and outstanding technical contributions.",
        icon: Trophy,
        featured: true,
        image: "/images/awards/Avishka Nirmitha Best Software Developer 2022 Spera.jpeg", // Add your image to public/awards/best-software-developer-2022.jpg
        gallery: [
            "/images/awards/Avishka Nirmitha Best Software Developer 2022 Spera.jpeg",
            // "/images/awards/Avishka Nirmitha Best Software Developer 2022 Spera.jpeg",
            // "/images/awards/Avishka Nirmitha Best Software Developer 2022 Spera.jpeg"
        ]
    },
    {
        id: 2,
        title: "Exceptional Contributor 2024",
        organization: "Colombo Lotus Tower",
        date: "2024",
        description: (
            <span>
                Awarded for exceptional contributions to projects and significant impact on team success. This prestigious recognition also included an{" "}
                <span className="inline-flex items-center gap-1 font-bold text-base">
                    <Plane className="size-4 text-amber-400 shrink-0" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">International tour to Bangkok.</span>
                </span>
            </span>
        ),
        icon: Medal,
        featured: true,
        image: "/images/awards/Avishka Nirmitha Exceptional Contributor of the year 2024 Spera .jpeg", // Add your image to public/awards/exceptional-contributor-2024.jpg
        gallery: [
            "/images/awards/Avishka Nirmitha Exceptional Contributor of the year 2024 Spera .jpeg"
        ]
    },


];

const AwardsPage = () => {
    const featuredAwards = awards.filter((a) => a.featured);
    // const otherAwards = awards.filter((a) => !a.featured);

    const [layout, setLayout] = useState<"grid" | "row">("grid");
    const [selectedAward, setSelectedAward] = useState<typeof awards[0] | null>(null);
    const [activeImage, setActiveImage] = useState(0);

    const openModal = (award: typeof awards[0]) => {
        setSelectedAward(award);
        setActiveImage(0);
    };

    const closeModal = () => {
        setSelectedAward(null);
    };

    return (
        <div className="flex-grow pt-12 pb-20 relative">
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
                    {/* Layout toggle */}
                    <div className="flex justify-end mb-5">
                        <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary border border-border">
                            <button
                                onClick={() => setLayout("grid")}
                                className={`p-2 rounded-md transition-all ${layout === "grid" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
                                aria-label="Grid layout"
                            >
                                <LayoutGrid className="size-4" />
                            </button>
                            <button
                                onClick={() => setLayout("row")}
                                className={`p-2 rounded-md transition-all ${layout === "row" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
                                aria-label="Row layout"
                            >
                                <LayoutList className="size-4" />
                            </button>
                        </div>
                    </div>

                    {layout === "grid" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredAwards.map((award) => {
                                const Icon = award.icon;
                                return (
                                    <div
                                        key={award.id}
                                        className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary/30 transition-all h-full"
                                    >
                                        {award.image && (
                                            <div className="relative w-full h-44 overflow-hidden" style={{height:"22rem"}}>
                                                <img
                                                    src={award.image}
                                                    alt={`${award.title} photo`}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                                            </div>
                                        )}
                                        <div className="p-6 md:p-8 flex flex-col gap-5 flex-grow">
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
                                            <div className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                                {award.description}
                                            </div>
                                            <button
                                                onClick={() => openModal(award)}
                                                className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-all font-bold text-sm shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:-translate-y-0.5"
                                            >
                                                <Eye size={18} /> View Moment
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-5">
                            {featuredAwards.map((award) => {
                                const Icon = award.icon;
                                return (
                                    <div
                                        key={award.id}
                                        className="glass-card rounded-2xl overflow-hidden flex flex-row group hover:border-primary/30 transition-all h-52 md:h-56"
                                    >
                                        {award.image && (
                                            <div className="relative w-48 md:w-64 shrink-0 overflow-hidden h-full">
                                                <img
                                                    src={award.image}
                                                    alt={`${award.title} photo`}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60" />
                                            </div>
                                        )}
                                        <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow justify-between">
                                            <div className="flex flex-col gap-4">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                                            <Icon className="size-5 text-primary" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                                {award.title}
                                                            </h3>
                                                            <p className="text-sm font-medium text-primary/80">{award.organization}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-secondary border border-border rounded-lg px-3 py-1 shrink-0">
                                                        <Calendar className="size-3" />
                                                        {award.date}
                                                    </div>
                                                </div>
                                                <div className="text-sm text-muted-foreground leading-relaxed">
                                                    {award.description}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => openModal(award)}
                                                className="flex items-center justify-center gap-2 w-fit px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-all font-bold text-sm shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:-translate-y-0.5"
                                            >
                                                <Eye size={16} /> View Moment
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Image Gallery Modal */}
            {selectedAward && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-sm" onClick={closeModal}>
                    <div
                        className="bg-card border border-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-4 md:p-6 border-b border-border sticky top-0 bg-card/95 backdrop-blur z-10">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold font-display">{selectedAward.title}</h2>
                                <p className="text-sm text-muted-foreground">{selectedAward.organization} • {selectedAward.date}</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-2 rounded-full hover:bg-secondary transition-colors"
                            >
                                <X size={24} className="text-muted-foreground hover:text-foreground" />
                            </button>
                        </div>
                        <div className="p-4 md:p-6">
                            <div className="mb-4">
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-black mb-4">
                                    <img
                                        src={selectedAward.gallery?.[activeImage] || selectedAward.image}
                                        alt={`${selectedAward.title} photo ${activeImage + 1}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                {selectedAward.gallery && selectedAward.gallery.length > 1 && (
                                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                        {selectedAward.gallery.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveImage(idx)}
                                                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx
                                                    ? "border-primary"
                                                    : "border-border hover:border-primary/50"
                                                    }`}
                                            >
                                                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AwardsPage;