import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

const creators = [
  {
    name: 'Vishaal Thennarasu (Founder)',
    subtitle: '(RA2411003010284)\n2nd Year',
  },
  {
    name: 'Ulaganathan P (Founder)',
    subtitle: '(RA2411003010265)\n2nd Year',
  },
];

const MeetTheCreators = () => {
  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto py-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-foreground mb-10">
          Meet the Creators
        </h1>

        <div className="flex justify-center gap-4 sm:gap-6">
          {creators.map((creator, index) => (
            <Card
              key={creator.name}
              className="flex-1 min-w-[140px] max-w-[260px] rounded-2xl border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="flex flex-col items-center py-8 px-4 sm:px-6">
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-5 shadow-md">
                  <User className="h-10 w-10 sm:h-12 sm:w-12 text-primary-foreground" />
                </div>

                <h2 className="font-bold text-base sm:text-lg text-foreground text-center leading-tight">
                  {creator.name}
                </h2>
                {creator.subtitle.split('\n').map((line, i) => (
                  <p key={i} className="text-xs sm:text-sm text-muted-foreground mt-1 text-center">
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MeetTheCreators;
