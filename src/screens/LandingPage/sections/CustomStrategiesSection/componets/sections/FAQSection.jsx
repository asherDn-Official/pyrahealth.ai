import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../../../components/ui/accordion";


export const FAQSection = ({ faqItems }) => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-8 lg:gap-12 py-8 lg:py-[30px]">
      <div className="flex flex-col w-full max-w-[1178px] items-center gap-4 lg:gap-5 px-4">
        <p className="max-w-[1016px] text-[#6c757d] text-lg sm:text-xl lg:text-2xl text-center tracking-[-0.48px] leading-7 lg:leading-9">
          Everything you need to know before bringing AI into your clinic.
        </p>
      </div>

      <div className="w-full max-w-[800px] px-4">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-4 lg:mb-5"
            >
              <AccordionTrigger className="bg-[#fffbfa] rounded-2xl px-4 lg:px-5 py-3 lg:py-4 text-[#131314] text-sm lg:text-[16.3px] font-medium tracking-[0.10px] leading-5 lg:leading-[23.4px] hover:no-underline hover:bg-[#fff5f2] transition-colors text-left">
                {item}
              </AccordionTrigger>
              <AccordionContent className="px-4 lg:px-5 py-3 lg:py-4">
                <p className="text-[#6c757d] text-sm lg:text-base">
                  Contact our team for detailed information about this topic.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};