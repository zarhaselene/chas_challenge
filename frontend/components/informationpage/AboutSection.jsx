import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-8"
    >
      {/* Main information card */}
      <Card className="mb-8 overflow-hidden">
        <CardHeader className="bg-muted/20">
          <CardTitle id="om" className="pb-2 text-center">
            Om ansökningsprocessen
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
            className="leading-relaxed font-medium"
          >
            Att ansöka om arbetshjälpmedel kan vara en komplicerad process med många steg och krav
            som måste uppfyllas. Vår tjänst har utvecklats för att förenkla denna process och hjälpa
            dig att maximera dina chanser att få det stöd du behöver. Vi har samlat all relevant
            information på ett ställe och erbjuder personlig vägledning från experter inom området.
          </motion.p>
        </CardContent>
      </Card>

      {/* Eligibility section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-center font-semibold">Vem kan ansöka?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Behöver hjälpmedlet på grund av en sjukdom eller funktionsnedsättning",
                "Har varit anställd hos din arbetsgivare eller drivit ett eget företag i 12 månader",
                "Är mellan 18 och 69 år",
                "Är försäkrad i Sverige",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div>
                    <Plus className="text-primary size-8 stroke-[3px]" />
                  </div>
                  <p className="text-base md:text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Types of support section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-center font-semibold">Vilka typer av stöd finns?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Anpassade specialhjälpmedel",
                  description:
                    "Hjälpmedel anpassade för just din funktionsnedsättning, t.ex. hörseltekniska eller syntekniska hjälpmedel",
                },
                {
                  title: "Individanpassad utrustning",
                  description:
                    "Specialanpassad utrustning som går utöver arbetsgivarens arbetsmiljöansvar",
                },
                {
                  title: "Personligt stöd",
                  description: "Arbetsbiträde eller personlig assistent på arbetsplatsen",
                },
                {
                  title: "OBS: Begränsningar",
                  description:
                    "Bidrag ges ej för hjälpmedel som behövs även utanför arbetet eller för standardutrustning/ergonomiska hjälpmedel",
                },
              ].map((support, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="border-muted bg-card border-l-primary rounded-lg border border-l-4 p-4 shadow-md"
                >
                  <h4 className="mb-2 font-semibold">{support.title}</h4>
                  <p>{support.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex flex-col">
              <small className="text-foreground mb-1">
                * Vår tjänst är specifikt anpassad för ansökningar hos Försäkringskassan
              </small>
              <small className="text-foreground">
                ** Om du är osäker på vilken typ av stöd du kan få, kontakta{" "}
                <Link
                  className="text-primary hover:underline"
                  href="https://www.lidol.se/"
                  target="_blank"
                >
                  Lidol{" "}
                </Link>
                så hjälper vi dig att hitta rätt lösning.
              </small>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
