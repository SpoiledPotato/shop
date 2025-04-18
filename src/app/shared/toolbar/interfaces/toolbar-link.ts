/**
 * Represents a link in the toolbar.
 * This interface defines the structure for toolbar links, including optional properties
 * for external links, dropdowns, and query parameters.
 */
export interface ToolbarLink {
  /**
   * The display title of the link.
   */
  title: string;

  /**
   * The URL the link points to.
   */
  url?: string;

  /**
   * Optional query parameters to append to the URL.
   * Represented as a key-value pair object.
   */
  queryParams?: { [key: string]: string };

  /**
   * Indicates whether the link is external.
   * If true, the link will open in a new browser tab.
   */
  isExternal?: boolean;

  /**
   * A list of links to display in the dropdown menu.
   */
  dropdownList?: ToolbarLink[];
}
