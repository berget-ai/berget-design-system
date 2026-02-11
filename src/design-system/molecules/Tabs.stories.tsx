import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
import { Home, Search, User } from "lucide-react";

const meta = {
    title: "Molecules/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultValue: "tab1"
    },
    render: args => (
        <Tabs {...args}>
            <TabsList>
                <TabsTrigger value="tab1">Overview</TabsTrigger>
                <TabsTrigger value="tab2">Features</TabsTrigger>
                <TabsTrigger value="tab3">Pricing</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
                <div className="p-4 text-white/80">
                    Overview content goes here. This is the default tab content.
                </div>
            </TabsContent>
            <TabsContent value="tab2">
                <div className="p-4 text-white/80">
                    Features content goes here. This tab shows product features.
                </div>
            </TabsContent>
            <TabsContent value="tab3">
                <div className="p-4 text-white/80">
                    Pricing content goes here. This tab shows pricing information.
                </div>
            </TabsContent>
        </Tabs>
    )
};

export const WithLabel: Story = {
    args: {
        defaultValue: "settings",
        label: "Settings",
        description: "Manage your application preferences"
    },
    render: args => (
        <Tabs {...args}>
            <TabsList>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="settings">
                <div className="p-4 text-white/80">
                    Application settings configuration.
                </div>
            </TabsContent>
            <TabsContent value="account">
                <div className="p-4 text-white/80">Account management options.</div>
            </TabsContent>
            <TabsContent value="notifications">
                <div className="p-4 text-white/80">Notification preferences.</div>
            </TabsContent>
        </Tabs>
    )
};

export const WithIcons: Story = {
    args: {
        defaultValue: "home"
    },
    render: args => (
        <Tabs {...args}>
            <TabsList>
                <TabsTrigger
                    value="home"
                    icon={<Home className="w-6 h-6 text-white" strokeWidth={1.5} />}
                >
                    Home
                </TabsTrigger>
                <TabsTrigger
                    value="search"
                    icon={<Search className="w-6 h-6 text-white" strokeWidth={1.5} />}
                >
                    Search
                </TabsTrigger>
                <TabsTrigger
                    value="profile"
                    icon={<User className="w-6 h-6 text-white" strokeWidth={1.5} />}
                >
                    Profile
                </TabsTrigger>
            </TabsList>
            <TabsContent value="home">
                <div className="p-4 text-white/80">Home dashboard content.</div>
            </TabsContent>
            <TabsContent value="search">
                <div className="p-4 text-white/80">Search functionality.</div>
            </TabsContent>
            <TabsContent value="profile">
                <div className="p-4 text-white/80">User profile information.</div>
            </TabsContent>
        </Tabs>
    )
};

export const PrimaryVariant: Story = {
    args: {
        defaultValue: "tab1",
        variant: "primary"
    },
    render: args => (
        <Tabs {...args}>
            <TabsList>
                <TabsTrigger value="tab1">Dashboard</TabsTrigger>
                <TabsTrigger value="tab2">Analytics</TabsTrigger>
                <TabsTrigger value="tab3">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
                <div className="p-4 text-white/80">Dashboard overview.</div>
            </TabsContent>
            <TabsContent value="tab2">
                <div className="p-4 text-white/80">Analytics data.</div>
            </TabsContent>
            <TabsContent value="tab3">
                <div className="p-4 text-white/80">Reports and exports.</div>
            </TabsContent>
        </Tabs>
    )
};

export const SubtleVariant: Story = {
    args: {
        defaultValue: "tab1",
        variant: "subtle"
    },
    render: args => (
        <Tabs {...args}>
            <TabsList>
                <TabsTrigger value="tab1">Documentation</TabsTrigger>
                <TabsTrigger value="tab2">Examples</TabsTrigger>
                <TabsTrigger value="tab3">API</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
                <div className="p-4 text-white/80">Documentation content.</div>
            </TabsContent>
            <TabsContent value="tab2">
                <div className="p-4 text-white/80">Code examples.</div>
            </TabsContent>
            <TabsContent value="tab3">
                <div className="p-4 text-white/80">API reference.</div>
            </TabsContent>
        </Tabs>
    )
};

export const MutedVariant: Story = {
    args: {
        defaultValue: "tab1",
        variant: "muted"
    },
    render: args => (
        <Tabs {...args}>
            <TabsList>
                <TabsTrigger value="tab1">Tab One</TabsTrigger>
                <TabsTrigger value="tab2">Tab Two</TabsTrigger>
                <TabsTrigger value="tab3">Tab Three</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
                <div className="p-4 text-white/80">Content for tab one.</div>
            </TabsContent>
            <TabsContent value="tab2">
                <div className="p-4 text-white/80">Content for tab two.</div>
            </TabsContent>
            <TabsContent value="tab3">
                <div className="p-4 text-white/80">Content for tab three.</div>
            </TabsContent>
        </Tabs>
    )
};

export const SmallSize: Story = {
    args: {
        defaultValue: "tab1",
        size: "sm"
    },
    render: args => (
        <Tabs {...args}>
            <TabsList>
                <TabsTrigger value="tab1">Small</TabsTrigger>
                <TabsTrigger value="tab2">Tabs</TabsTrigger>
                <TabsTrigger value="tab3">Here</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
                <div className="p-4 text-white/80">Small tab content.</div>
            </TabsContent>
            <TabsContent value="tab2">
                <div className="p-4 text-white/80">More small content.</div>
            </TabsContent>
            <TabsContent value="tab3">
                <div className="p-4 text-white/80">Even more content.</div>
            </TabsContent>
        </Tabs>
    )
};

export const LargeSize: Story = {
    args: {
        defaultValue: "tab1",
        size: "lg"
    },
    render: args => (
        <Tabs {...args}>
            <TabsList>
                <TabsTrigger value="tab1">Large</TabsTrigger>
                <TabsTrigger value="tab2">Tabs</TabsTrigger>
                <TabsTrigger value="tab3">Here</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
                <div className="p-4 text-white/80">Large tab content.</div>
            </TabsContent>
            <TabsContent value="tab2">
                <div className="p-4 text-white/80">More large content.</div>
            </TabsContent>
            <TabsContent value="tab3">
                <div className="p-4 text-white/80">Even more content.</div>
            </TabsContent>
        </Tabs>
    )
};

export const WithDisabledTab: Story = {
    args: {
        defaultValue: "tab1"
    },
    render: args => (
        <Tabs {...args}>
            <TabsList>
                <TabsTrigger value="tab1">Active</TabsTrigger>
                <TabsTrigger value="tab2">Available</TabsTrigger>
                <TabsTrigger value="tab3" disabled>
                    Disabled
                </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
                <div className="p-4 text-white/80">Active tab content.</div>
            </TabsContent>
            <TabsContent value="tab2">
                <div className="p-4 text-white/80">Available tab content.</div>
            </TabsContent>
            <TabsContent value="tab3">
                <div className="p-4 text-white/80">This content is not accessible.</div>
            </TabsContent>
        </Tabs>
    )
};

export const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState("tab1");

        return (
            <div className="flex flex-col gap-4">
                <div className="text-white/80 text-sm">
                    Selected tab: <span className="font-mono text-primary">{value}</span>
                </div>
                <Tabs value={value} onValueChange={setValue}>
                    <TabsList>
                        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">
                        <div className="p-4 text-white/80">Controlled tab 1 content.</div>
                    </TabsContent>
                    <TabsContent value="tab2">
                        <div className="p-4 text-white/80">Controlled tab 2 content.</div>
                    </TabsContent>
                    <TabsContent value="tab3">
                        <div className="p-4 text-white/80">Controlled tab 3 content.</div>
                    </TabsContent>
                </Tabs>
            </div>
        );
    }
};
