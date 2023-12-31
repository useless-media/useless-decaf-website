// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: u8AT6wj1zWXgx7uJr3qyey
// Component: mmPYs4nmDQ4w

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { AntdMenu } from "@plasmicpkgs/antd5/skinny/registerMenu";
import { AntdMenuItem } from "@plasmicpkgs/antd5/skinny/registerMenu";
import { AntdSubMenu } from "@plasmicpkgs/antd5/skinny/registerMenu";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_de_caf.module.css"; // plasmic-import: u8AT6wj1zWXgx7uJr3qyey/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: mmPYs4nmDQ4w/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  menu?: p.Flex<typeof AntdMenu>;
  asd?: p.Flex<typeof AntdMenuItem>;
  subMenu?: p.Flex<typeof AntdSubMenu>;
  info?: p.Flex<"section">;
  info2?: p.Flex<"section">;
  footer?: p.Flex<"section">;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <section className={classNames(projectcss.all, sty.section__szflL)}>
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__xyF9G)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___9Pzw7)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"244px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/de_caf/images/decafpng2.png",
                    fullWidth: 1290,
                    fullHeight: 537,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__gC7RO)}>
                <AntdMenu
                  data-plasmic-name={"menu"}
                  data-plasmic-override={overrides.menu}
                  className={classNames("__wab_instance", sty.menu)}
                  mode={"horizontal"}
                  multiple={true}
                >
                  <AntdMenuItem
                    data-plasmic-name={"asd"}
                    data-plasmic-override={overrides.asd}
                    className={classNames("__wab_instance", sty.asd)}
                    key={"menuItemKey1"}
                    onClick={async () => {
                      const $steps = {};

                      $steps["goToHomepage"] = true
                        ? (() => {
                            const actionArgs = { destination: `/` };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                __nextRouter?.push(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["goToHomepage"] != null &&
                        typeof $steps["goToHomepage"] === "object" &&
                        typeof $steps["goToHomepage"].then === "function"
                      ) {
                        $steps["goToHomepage"] = await $steps["goToHomepage"];
                      }
                    }}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__e41Rk
                      )}
                    >
                      {"Menu item"}
                    </div>
                  </AntdMenuItem>
                  <AntdMenuItem
                    className={classNames(
                      "__wab_instance",
                      sty.menuItem__ihX1J
                    )}
                    key={"menuItemKey2"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__q2Tmb
                      )}
                    >
                      {"Menu item"}
                    </div>
                  </AntdMenuItem>
                  <AntdSubMenu
                    data-plasmic-name={"subMenu"}
                    data-plasmic-override={overrides.subMenu}
                    className={classNames("__wab_instance", sty.subMenu)}
                    title={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__sagcM
                        )}
                      >
                        {"Sub-menu"}
                      </div>
                    }
                  >
                    <AntdMenuItem
                      className={classNames(
                        "__wab_instance",
                        sty.menuItem___6Tuya
                      )}
                      key={"subMenuItemKey1"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__hbujp
                        )}
                      >
                        {"Sub-menu item 1"}
                      </div>
                    </AntdMenuItem>
                    <AntdMenuItem
                      className={classNames(
                        "__wab_instance",
                        sty.menuItem__lvM2W
                      )}
                      key={"subMenuItemKey2"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__sZfD3
                        )}
                      >
                        {"Sub-menu item 2"}
                      </div>
                    </AntdMenuItem>
                  </AntdSubMenu>
                </AntdMenu>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__vwYUt)}>
            <section
              data-plasmic-name={"info"}
              data-plasmic-override={overrides.info}
              className={classNames(projectcss.all, sty.info)}
            />

            <section
              data-plasmic-name={"info2"}
              data-plasmic-override={overrides.info2}
              className={classNames(projectcss.all, sty.info2)}
            />
          </section>
          <section
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames(projectcss.all, sty.footer)}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__geHq8)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"eager"}
              src={{
                src: "/plasmic/de_caf/images/vecteezySeaWavesClipartDesignIllustration9379755Png.png",
                fullWidth: 20047,
                fullHeight: 1933,
                aspectRatio: undefined
              }}
            />
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "columns",
    "menu",
    "asd",
    "subMenu",
    "info",
    "info2",
    "footer"
  ],
  columns: ["columns", "menu", "asd", "subMenu"],
  menu: ["menu", "asd", "subMenu"],
  asd: ["asd"],
  subMenu: ["subMenu"],
  info: ["info"],
  info2: ["info2"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  menu: typeof AntdMenu;
  asd: typeof AntdMenuItem;
  subMenu: typeof AntdSubMenu;
  info: "section";
  info2: "section";
  footer: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <p.PlasmicPageGuard
      minRole={null}
      appId={"u8AT6wj1zWXgx7uJr3qyey"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "u8AT6wj1zWXgx7uJr3qyey"
    });

    return (
      <p.PlasmicDataSourceContextProvider
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </p.PlasmicDataSourceContextProvider>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    menu: makeNodeComponent("menu"),
    asd: makeNodeComponent("asd"),
    subMenu: makeNodeComponent("subMenu"),
    info: makeNodeComponent("info"),
    info2: makeNodeComponent("info2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
