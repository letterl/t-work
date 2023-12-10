import React, { PureComponent, ChangeEvent } from "react";
import ReactDiffViewer from "react-diff-viewer";
import { Textarea } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

interface State {
  oldCode: string;
  newCode: string;
}

class Diff extends PureComponent<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      oldCode: "",
      newCode: "",
    };
  }

  handleInputChange =
    (key: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      this.setState({ [key]: event.target.value } as Pick<State, keyof State>);
    };

  render() {
    const { oldCode, newCode } = this.state;
    const sortedOldCode = oldCode.split("\n").sort().join("\n");
    const sortedNewCode = newCode.split("\n").sort().join("\n");

    return (
      <>
        <div className="flex space-x-4 p-2">
          <Textarea
            key="default"
            type="email"
            color="secondary"
            label="原始文本"
            placeholder="输入原始文本"
            defaultValue=""
            onClear={() => this.setState({ oldCode: "" })}
            onChange={this.handleInputChange("oldCode")}
          />
          <Textarea
            key="default"
            type="email"
            color="primary"
            label="新文本"
            placeholder="输入新文本"
            defaultValue=""
            onClear={() => this.setState({ newCode: "" })}
            onChange={this.handleInputChange("newCode")}
          />
        </div>
        <div className="flex w-full flex-col p-2">
          <Tabs aria-label="Options">
            <Tab key="default" title="默认比对">
              <Card>
                <CardBody>
                  <ReactDiffViewer oldValue={oldCode} newValue={newCode} />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="order" title="排序比对">
              <Card>
                <CardBody>
                  <ReactDiffViewer
                    oldValue={sortedOldCode}
                    newValue={sortedNewCode}
                  />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </>
    );
  }
}

export default Diff;
