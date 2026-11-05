import ProbeExperience from "./probe-experience";
import { getSampleBagId, sampleBags } from "./product-data";

export default async function ProbePage({ searchParams }) {
  const params = await searchParams;
  const rawId = typeof params?.id === "string" ? params.id : undefined;
  const bagId = getSampleBagId(rawId);

  return <ProbeExperience bag={bagId === null ? null : sampleBags[bagId]} />;
}
