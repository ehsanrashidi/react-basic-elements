import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Button";
import CardLink from "../CardLink";
import Flex from "../Flex";

import Card from "./Card";

export default {
    title: "reactBasicTemplate/Card",
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardExample = Template.bind({});
export const CardExample2 = Template.bind({});
export const CardExample3 = Template.bind({});

const image = {
    src: "data:image/jpeg;base64,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",
    alt: "Image alt",
};

CardExample.args = {
    title: "Card",
    body: (
        <>
            <ul className="list-group ">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
        </>
    ),
    image: image,
    width: 18,
    links: (
        <Flex justify="flex-start" gap={0.5}>
            <Button label="label 1" loading={true} loadingColor="light" loadingType="grow" href="#link1" />
            <Button label="label 3" badge="new" badgeType="danger" loading loadingColor="light" loadingType="border" />
        </Flex>
    ),
};

CardExample2.args = {
    title: "Card",
    body: "A well-known quote, contained in a blockquote element.",
    image: image,
    width: 18,
    links: (
        <Flex justify="flex-start" gap={0.5}>
            <CardLink label="label 1" to="#link1" />
            <CardLink label="label 2" to="#link2" />
        </Flex>
    ),
};

CardExample3.args = {
    title: "Card",
    body: "A well-known quote, contained in a blockquote element.",
    width: 18,
    header: "card header",
    footer: <Button label="label 1" loading={true} size="sm" loadingColor="danger" loadingType="grow" href="#link1" variant="outline" />,
};
