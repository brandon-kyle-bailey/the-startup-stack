import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section id="faq" className="flex flex-col items-center gap-8">
      <h1 className="">Frequently Asked Questions (FAQ)</h1>
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Do I get access to this landing page in the starter kit?
          </AccordionTrigger>
          <AccordionContent>
            Yes, this page isn&apos;t even a real landingpage more so a template
            for you to build on
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I get access to this landing page in the starter kit?
          </AccordionTrigger>
          <AccordionContent>
            Yes, this page isn&apos;t even a real landingpage more so a template
            for you to build on
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Do I get access to this landing page in the starter kit?
          </AccordionTrigger>
          <AccordionContent>
            Yes, this page isn&apos;t even a real landingpage more so a template
            for you to build on
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
