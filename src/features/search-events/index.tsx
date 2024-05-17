import { Stack, Box } from "@chakra-ui/react";
import { EventCard } from "../../components/event-card/full";
import { useEffect, useState } from "react";
import eventService from "../../services/event-service";

export const SearchEvents = () => {
  const [events, setEvents] = useState<Evento[]>();
  useEffect(() => {
    const res = async () => {
      const res = await eventService.all();
      setEvents(res);
    };
    res();
  }, []);
  return (
    <Stack
      as={Box}
      direction={{ base: "column", md: "row" }}
      justify={{ base: "none", md: "center" }}
      align={"center"}
      textAlign={"center"}
      wrap={{ base: "nowrap", md: "wrap" }}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
      overflow={"scroll"}
      height={"86vh"}
    >
      {events?.map((e: Evento) => (
        <EventCard key={e.id} evento={e}></EventCard>
      ))}
    </Stack>
  );
};
