---
sidebar_position: 5
---

# 中心极限定理

中心极限定理（Central Limit Theorem, CLT）是概率论中最优美的定理之一：大量独立随机变量之和，经标准化后，其分布**按分布收敛**于标准正态分布 $N(0, 1)$——无论原始变量服从什么分布！

## 独立同分布下的 CLT（林德伯格-莱维定理）

> 设 $X_1, X_2, \ldots$ **独立同分布**，$E(X_1) = \mu$，$\operatorname{Var}(X_1) = \sigma^2$（有限）。记 $S_n = \sum_{i=1}^{n} X_i$。则对任意 $x$：
> $$\lim_{n \to \infty} P\!\left(\frac{S_n - n\mu}{\sigma\sqrt{n}} \leq x\right) = \Phi(x) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{x} e^{-t^2/2}\,dt$$

或等价地：

$$\frac{S_n - n\mu}{\sigma\sqrt{n}} \xrightarrow{d} N(0, 1)$$

### 核心结论

- 无论 $X_i$ 原本是什么分布（二项、泊松、均匀、指数……），只要方差有限，**标准化后的和必定趋向正态**
- 这解释了正态分布在自然界中的普遍性——任何由大量微小独立因素叠加而成的量，都近似服从正态分布

### 另一种写法

$$\frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} \xrightarrow{d} N(0, 1)$$

样本均值的波动以 $1/\sqrt{n}$ 的速率减小，极限分布为正态。

## 棣莫弗-拉普拉斯定理（二项分布的正态近似）

> 设 $Y_n \sim B(n, p)$。则对任意 $x$：
> $$\lim_{n \to \infty} P\!\left(\frac{Y_n - np}{\sqrt{np(1-p)}} \leq x\right) = \Phi(x)$$

这是独立同分布 CLT 的特例（伯努利变量之和即为二项分布）。

### 连续性修正

用正态分布近似二项分布时，因二项是离散的，正态是连续的，应在整数边界处做 **$0.5$ 修正**：

$$P(Y_n = k) \approx \Phi\!\left(\frac{k + 0.5 - np}{\sqrt{np(1-p)}}\right) - \Phi\!\left(\frac{k - 0.5 - np}{\sqrt{np(1-p)}}\right)$$

$$P(a \leq Y_n \leq b) \approx \Phi\!\left(\frac{b + 0.5 - np}{\sqrt{np(1-p)}}\right) - \Phi\!\left(\frac{a - 0.5 - np}{\sqrt{np(1-p)}}\right)$$

### 近似条件

一般 $np \geq 5$ 且 $n(1-p) \geq 5$ 时近似效果较好。

## 独立不同分布下的 CLT（李雅普诺夫定理）

若 $X_1, X_2, \ldots$ 独立但**不必同分布**，在满足**李雅普诺夫条件**（某种高阶矩条件）下，标准化和仍收敛于 $N(0, 1)$。

记 $E(X_k) = \mu_k$，$\operatorname{Var}(X_k) = \sigma_k^2$，$B_n^2 = \sum_{k=1}^{n} \sigma_k^2$。

**李雅普诺夫条件**：存在 $\delta > 0$，使：

$$\frac{1}{B_n^{2+\delta}} \sum_{k=1}^{n} E(|X_k - \mu_k|^{2+\delta}) \to 0 \quad (n \to \infty)$$

满足此条件则：

$$\frac{\sum_{k=1}^{n} (X_k - \mu_k)}{B_n} \xrightarrow{d} N(0, 1)$$

## CLT 的证明概要（特征函数法）

1. 设 $Y_i = \dfrac{X_i - \mu}{\sigma}$，则 $E(Y_i) = 0$，$\operatorname{Var}(Y_i) = 1$
2. 令 $Z_n = \dfrac{1}{\sqrt{n}}\sum_{i=1}^{n} Y_i$，求其特征函数：
   $$\varphi_{Z_n}(t) = [\varphi_{Y_1}(t/\sqrt{n})]^n$$
3. 泰勒展开 $\varphi_{Y_1}$ 在 $0$ 附近：
   $$\varphi_{Y_1}(s) = 1 - \frac{s^2}{2} + o(s^2)$$
4. $$\varphi_{Z_n}(t) = \left[1 - \frac{t^2}{2n} + o\!\left(\frac{1}{n}\right)\right]^n \longrightarrow e^{-t^2/2}$$
5. 由 Lévy 连续性定理，$Z_n \xrightarrow{d} N(0, 1)$

## CLT 的应用

| 领域 | 应用 |
|---|---|
| 区间估计 | 用正态分位数构造置信区间 |
| 假设检验 | $z$ 检验、$t$ 检验 |
| 质量控制 | 控制图的 $3\sigma$ 原则 |
| 保险精算 | 总赔付额近似正态 |
| 测量误差 | 误差近似正态 |
| 金融 | 资产对数收益率近似正态 |

## 大数定律 vs 中心极限定理

| | 大数定律 | 中心极限定理 |
|---|---|---|
| 告诉什么 | $\bar{X}_n \to \mu$（收敛到常数） | $\sqrt{n}(\bar{X}_n - \mu)/\sigma \xrightarrow{d} N(0,1)$（波动量级和分布） |
| 波动量级 | 不说明 | $O(1/\sqrt{n})$ |
| 波动分布 | 不说明 | 正态分布 |
| 精度 | 一阶近似 | 二阶近似 |
| 对分布要求 | 期望存在 | 方差有限 |
