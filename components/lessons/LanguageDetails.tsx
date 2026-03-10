import { UKFlagIcon, JapanFlagIcon } from "@/components/Icons";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import TitleWithDescription from "../TitleWithDescription";

export default function LanguageDetails() {
  return (
    <section className="flex flex-col h-full w-full">
      <div className="mb-8">
        <TitleWithDescription
          description="I offer dedicated 1-on-1 tutoring sessions focused on practical conversation, pronunciation, and
          industry-specific vocabulary."
          title="What I Teach"
        />
      </div>

      <div className="flex flex-col gap-6">
        <Card>
          <CardContent className="p-6 sm:p-8 flex items-start gap-6">
            <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden flex items-center justify-center">
              <UKFlagIcon className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-2">
              <CardTitle>English</CardTitle>
              <CardDescription>
                From everyday conversational English to advanced business negotiations and esports commentary
                terminology.
              </CardDescription>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 sm:p-8 flex items-start gap-6">
            <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden flex items-center justify-center">
              <JapanFlagIcon className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-2">
              <CardTitle>Japanese (日本語)</CardTitle>
              <CardDescription>
                Master the basics of Hiragana and Katakana, up to fluent communication required in the Japanese
                entertainment industry.
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
